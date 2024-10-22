import React, { useState } from "react";
import * as pantryActions from "../../store/pantry";
import { useDispatch, useSelector } from "react-redux";
import "./NewIngredient.css";

function NewIngredientForm({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(pantryActions.newIngredient(name, imgUrl, desc, userId))
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
      <h1 className="modalTitle">New Ingredient</h1>
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
        <label className="modalLabels">
          Image URL
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>
        <label className="modalLabels">
          Description
          <textarea
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button type="submit" className="modalBtns">
          Create New Ingredient
        </button>
      </form>
    </>
  );
}

export default NewIngredientForm;
