import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch } from "react-redux";
import "./EditFridge.css";

function EditFridgeForm({currFridge}) {
  const dispatch = useDispatch();
  const [name, setName] = useState(currFridge.name);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(kitchenActions.editFridge(currFridge.id, name))
  };

  return (
    <>
      <h1>Edit Fridge</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Edit Fridge</button>
      </form>
    </>
  );
}

export default EditFridgeForm;
