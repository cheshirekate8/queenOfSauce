import React from "react";
import { useSelector } from "react-redux";
import './Kitchen.css';
import NewIngredientModal from "../NewIngredientModal";

function MyIngredientsComponent() {

    const myIngredients = useSelector((state) => state.pantry.myIngredients)

    return (
        <div className="kitchenDiv">
            <h1 className="kitchenTitle">My Custom Ingredients
            <NewIngredientModal />
            </h1>
            <div id='ingredientsListDiv'>
                {myIngredients && myIngredients.map((ingredient) => (
                    <div id={`${ingredient.name}Div`} className="ingredientDiv">
                        <h5>{ingredient.name}</h5>
                        <img src={ingredient.imgUrl} alt={`${ingredient.name}`} width={"48px"} height={"48px"} />
                        <p className='reciP'>{ingredient.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyIngredientsComponent
;
