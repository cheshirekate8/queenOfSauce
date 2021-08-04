import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as pantryActions from "../../store/pantry"

function EditIngredientForm({ currIngredient, setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id
    const [name, setName] = useState(currIngredient.name);
    const [imgUrl, setImgUrl] = useState(currIngredient.imgUrl)
    const [desc, setDesc] = useState(currIngredient.desc)
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const id = currIngredient.id;
        setShowModal(false)
        dispatch(pantryActions.editIngredient(id, name,imgUrl,desc,userId))
    };

    return (
        <>
            <h1>Edit Ingredient</h1>
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
                <label>
                    Image URL
                    <input
                        type="text"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description
                    <textarea
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Edit Ingredient</button>
            </form>
        </>
    );
}

export default EditIngredientForm;
