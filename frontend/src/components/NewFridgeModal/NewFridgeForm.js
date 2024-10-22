import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen";
import { useDispatch, useSelector } from "react-redux";

function NewFridgeForm({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  let userId = sessionUser.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(kitchenActions.newFridge(userId, name))
      .then(() => {
        setShowModal(false);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className="modalTitle">New Fridge</h1>
      <form onSubmit={handleSubmit} className="modalForm">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}
        <label className="modalLabels">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" className="modalBtns">
          Create New Fridge
        </button>
      </form>
    </>
  );
}

export default NewFridgeForm;
