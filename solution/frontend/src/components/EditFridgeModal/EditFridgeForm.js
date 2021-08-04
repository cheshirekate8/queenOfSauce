import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch } from "react-redux";
import "./EditFridge.css";

function EditFridgeForm({currFridge, setShowModal}) {
  const dispatch = useDispatch();
  const [name, setName] = useState(currFridge.name);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(kitchenActions.editFridge(currFridge.id, name))
    .then(() => {
      setShowModal(false)
    })
    .catch(async (res) => {
      const data = await res.json();
      console.log(data)
      if (data && data.errors) setErrors(data.errors);
    });
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
