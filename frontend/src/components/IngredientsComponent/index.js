import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as pantryActions from "../../store/pantry"
import * as kitchenActions from "../../store/kitchen"
import './Ingredients.css'
import NewIngredientModal from "../NewIngredientModal";
import AddToFridgeModal from "../AddToFridgeModal";

function IngredientsComponent() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const ingredients = useSelector((state) => state.pantry.ingredients)

    useEffect(() => {
        dispatch(pantryActions.getIngredients())
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;


    return (
        <div id='ingredientsDiv'>
            <h1 className='ingredientsTitle'>
                Ingredients
                {/* <NewIngredientModal /> */}
            </h1>
            <div id='ingredientsListDiv'>
                {ingredients && ingredients.map((ingredient) => (
                    <div id={`${ingredient.name}Div`} className="ingredientDiv">
                        <h5>
                            {ingredient.name}
                            <AddToFridgeModal currIngredient={ingredient}/>
                        </h5>
                        <img
                            src={ingredient.imgUrl}
                            alt={`${ingredient.name}`}
                            width={"48px"}
                            height={"48px"}
                        />
                        <p className='reciP'>{ingredient.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IngredientsComponent;
