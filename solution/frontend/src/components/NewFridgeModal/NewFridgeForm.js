import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch, useSelector } from "react-redux";
import "./NewFridge.css";

function NewFridgeForm({setShowModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  let userId = sessionUser.id

  // console.log(showModal)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowModal(false)
    dispatch(kitchenActions.newFridge(userId, name))
  };

  return (
    <>
      <h1>New Fridge</h1>
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
        <button type="submit">Create New Fridge</button>
      </form>
    </>
  );
}

export default NewFridgeForm;
