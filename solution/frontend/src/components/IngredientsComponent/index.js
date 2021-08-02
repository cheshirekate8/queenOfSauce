import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"
import * as ingredientActions from "../../store/pantry"
import './Ingredients.css'

function IngredientsComponent() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const ingredients = useSelector((state) => state.pantry.ingredients)

    useEffect(() => {
        dispatch(ingredientActions.getIngredients())
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;


    return (
        <div id='ingredientsDiv'>
            <h1 className='ingredientsTitle'>
                Ingredients
            </h1>
            <div id='ingredientsListDiv'>
                {ingredients && ingredients.map((ingredient) => (
                    <div id={`${ingredient.name}Div`} className="ingredientDiv">
                        <h5>{ingredient.name}</h5>
                        <img src={ingredient.imgUrl} alt={`Image of ${ingredient.name}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IngredientsComponent;
