import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen";
import { useDispatch, useSelector } from "react-redux";

function EditQuantityForm({ setShowModal, currIngredient }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [quantity, setQuantity] = useState(currIngredient.quantity);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(
      kitchenActions.editQuantity(currIngredient.id, quantity, sessionUser.id),
    )
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  console.log(currIngredient);

  return (
    <>
      <h1 className="modalTitle">
        Edit quantity of {currIngredient.Ingredient.name} in your Fridge.
      </h1>
      <form onSubmit={handleSubmit} className="modalForm">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}
        <label className="modalLabels">
          Quantity
          <input
            type="integer"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit" className="modalBtns">
          Edit Quantity
        </button>
      </form>
    </>
  );
}

export default EditQuantityForm;
