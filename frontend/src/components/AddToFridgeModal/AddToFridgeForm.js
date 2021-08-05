import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch, useSelector } from "react-redux";
import './AddToFridge.css';

function AddToFridgeForm({ setShowModal, currIngredient }) {
  const dispatch = useDispatch();
  const fridges = useSelector((state) => state.kitchen.fridges);
  const sessionUser = useSelector((state) => state.session.user);
  const [fridgeId, setFridgeId] = useState(fridges[0].id);
  const [errors, setErrors] = useState([]);

  const userId = sessionUser.id
  const ingredientId = currIngredient.id

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(kitchenActions.addToFridge(fridgeId, ingredientId, userId))
      .then(() => {
        setShowModal(false)
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1>Which Fridge?</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <select onChange={(e) => console.log(e.target.value)}>
          {fridges && fridges.map((fridge, i) => (
              <option
              value={fridge.id}
              >{fridge.name}</option>
          ))}
          </select>
        <button type="submit">Add To Fridge</button>
      </form>
    </>
  );
}

export default AddToFridgeForm;
