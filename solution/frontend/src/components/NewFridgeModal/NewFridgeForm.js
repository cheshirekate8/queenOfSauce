import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch, useSelector } from "react-redux";
import "./NewFridge.css";

function NewFridgeForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  // const [showModal, setShowModal] = useState(true);

  let userId = sessionUser.id

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // console.log(userId)
    // console.log(name)
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
