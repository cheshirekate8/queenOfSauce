import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Kitchen.css";
import NewIngredientModal from "../NewIngredientModal";
import EditIngredientModal from "../EditIngredientModal";
import AddToFridgeModal from "../AddToFridgeModal";
import * as pantryActions from "../../store/pantry";

function MyIngredientsComponent() {
  const myIngredients = useSelector((state) => state.pantry.myIngredients);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pantryActions.getMyIngredients(sessionUser?.id));
  }, [dispatch, sessionUser?.id]);

  return (
    <div className="kitchenDiv">
      <h1 className="kitchenTitle">
        My Custom Ingredients
        <NewIngredientModal />
      </h1>
      <div id="ingredientsListDiv">
        {myIngredients && myIngredients.length > 0
          ? myIngredients.map((ingredient) => (
              <div id={`${ingredient.name}Div`} className="ingredientDiv">
                <h5>
                  {ingredient.name}
                  <EditIngredientModal currIngredient={ingredient} />
                  <i
                    className="fas fa-trash-alt iconz"
                    onClick={() =>
                      dispatch(pantryActions.deleteIngredient(ingredient.id))
                    }
                  ></i>
                  <AddToFridgeModal currIngredient={ingredient} />
                </h5>
                <img
                  src={ingredient.imgUrl}
                  alt={`${ingredient.name}`}
                  width={"48px"}
                  height={"48px"}
                />
                <p className="reciP">{ingredient.desc}</p>
              </div>
            ))
          : "You have no custom ingredients! Create one by clicking the + sign on the right!"}
      </div>
    </div>
  );
}

export default MyIngredientsComponent;
