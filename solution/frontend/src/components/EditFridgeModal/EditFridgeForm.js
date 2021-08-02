import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch, useSelector } from "react-redux";
import "./EditFridge.css";

function EditFridgeForm({currFridge}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  // const [showModal, setShowModal] = useState(true);

  // let userId = sessionUser.id

  console.log(currFridge.id)

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
        <button type="submit">Create Edit Fridge</button>
      </form>
    </>
  );
}

export default EditFridgeForm;
