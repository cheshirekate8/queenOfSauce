import React, { useState, useEffect } from "react";
import * as pantryActions from "../../store/pantry"
import { useDispatch, useSelector } from "react-redux";
import "./NewIngredient.css";

function NewIngredientForm({ setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("")
    const [desc, setDesc] = useState("")
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        setShowModal(false)
        dispatch(pantryActions.newIngredient(name,imgUrl,desc,userId))
    };

    return (
        <>
            <h1>New Ingredient</h1>
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
                <button type="submit">Create New Ingredient</button>
            </form>
        </>
    );
}

export default NewIngredientForm;
