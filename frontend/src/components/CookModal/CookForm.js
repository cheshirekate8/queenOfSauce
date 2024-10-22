import React, { useEffect, useState } from "react";
import * as kitchenActions from "../../store/kitchen";
import { recipeToIngredient } from "../../store/cookbook";
import { useDispatch, useSelector } from "react-redux";

function CookForm({ setShowModal, recipe }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const fridges = useSelector((state) => state.kitchen.fridges);
  const [currFridge, setCurrFridge] = useState(null);
  const [showCookButton, setShowCookButton] = useState(false);
  const [errors, setErrors] = useState([]);

  const checkIf = async (fridgeId, recipe) => {
    const ingArray = await dispatch(
      kitchenActions.getOneFridgesIngredients(fridgeId),
    );
    let testArr = [];
    let anotherTestArr = [];
    // console.log(ingArray)
    // console.log(currFridge)
    recipe.RecipeIngredients.forEach((recIng) => {
      // console.log('RECIPE ING ===>', recIng)
      ingArray.forEach((refIng) => {
        // console.log('FRIDGE ING ===>', refIng)
        if (
          recIng.Ingredient.id === refIng.Ingredient.id &&
          refIng.quantity - recIng.quantity >= 0
        ) {
          testArr.push(true);
        }
      });
    });

    if (testArr.length === recipe.RecipeIngredients.length) {
      anotherTestArr.push("Can Cook");
      setShowCookButton(true);
      return true;
    } else {
      anotherTestArr.push("Cant cook");
      setShowCookButton(false);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingArray = await dispatch(
      kitchenActions.getOneFridgesIngredients(currFridge),
    );
    recipe.RecipeIngredients.forEach((recIng) => {
      ingArray.forEach((refIng) => {
        if (recIng.Ingredient.id === refIng.Ingredient.id) {
          let newQuantity = refIng.quantity - recIng.quantity;
          if (newQuantity === 0) {
            dispatch(
              kitchenActions.deleteFromFridge(refIng.id, sessionUser.id),
            );
          } else {
            dispatch(
              kitchenActions.editQuantity(
                refIng.id,
                newQuantity,
                sessionUser.id,
              ),
            );
          }
        }
      });
    });
    //HERE WE ADD THE COOKED THING TO THE FRIDGE AS AN INGREDIENT. MUST REDO ALL THE SEEDS NOW.
    const recipeToIng = await dispatch(recipeToIngredient(recipe.id));
    // console.log(recipeToIng.id, recipeToIng.name, 'fridge id', currFridge)
    dispatch(
      kitchenActions.addToFridge(recipeToIng.id, currFridge, 1, sessionUser.id),
    );
    setShowModal(false);
  };

  let checker = async () => await checkIf(currFridge, recipe);
  checker();

  if (fridges.length) {
    return (
      <>
        <h1 className="modalTitle"> Cook {recipe.name}?</h1>
        <form onSubmit={handleSubmit} className="modalForm">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          {fridges && (
            <label className="modalLabels">
              Which Fridge?
              <select onChange={(e) => setCurrFridge(e.target.value)}>
                <option value="" disabled selected>
                  Select your option
                </option>
                {fridges.map((fridge) => (
                  <option value={fridge.id}>{fridge.name}</option>
                ))}
              </select>
            </label>
          )}
          {showCookButton ? (
            <button type="submit" className="modalBtns">
              Cook!
            </button>
          ) : (
            <div>
              <br />
              Please select a fridge with all the proper ingredients!
            </div>
          )}
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1 className="modalTitle"> Cook {recipe.name}?</h1>
        <div>You have no Fridges! Please create one!</div>
      </>
    );
  }
}

export default CookForm;
