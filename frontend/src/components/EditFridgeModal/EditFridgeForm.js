import React, { useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch } from "react-redux";

function EditFridgeForm({ currFridge, setShowModal }) {
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
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className='modalTitle'>Edit Fridge</h1>
      <form onSubmit={handleSubmit} className='modalForm'>
        {errors.length > 0 &&
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>}
        <label className='modalLabels'>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <button type="submit" className="modalBtns">Edit Fridge</button>
    </>
  );
}

export default EditFridgeForm;
