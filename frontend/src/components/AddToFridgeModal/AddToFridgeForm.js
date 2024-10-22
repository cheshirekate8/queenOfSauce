import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen";
import { useDispatch, useSelector } from "react-redux";

function AddToFridgeForm({ setShowModal, currIngredient }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const fridges = useSelector((state) => state.kitchen.fridges);
  const [quantity, setQuantity] = useState(1);
  const [currFridgeId, setCurrFridgeId] = useState(fridges[0]?.id);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(
      kitchenActions.addToFridge(
        currIngredient.id,
        currFridgeId,
        quantity,
        sessionUser.id,
      ),
    )
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  if (fridges.length) {
    return (
      <>
        <h1 className="modalTitle">Add {currIngredient.name} to your Fridge</h1>
        <form onSubmit={handleSubmit} className="modalForm">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          )}
          {fridges.length > 1 && (
            <label className="modalLabels">
              Fridge
              <select onChange={(e) => setCurrFridgeId(e.target.value)}>
                {fridges.map((fridge) => (
                  <option value={fridge.id}>{fridge.name}</option>
                ))}
              </select>
            </label>
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
            Add To Fridge
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h1 className="modalTitle">Add {currIngredient.name} to your Fridge</h1>
        <div>You have no Fridges! Please create one!</div>
      </>
    );
  }
}

export default AddToFridgeForm;
