import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import NewIngredientModal from "../NewIngredientModal";
import EditIngredientModal from "../EditIngredientModal";
import * as pantryActions from "../../store/pantry"

function MyIngredientsComponent() {

    const myIngredients = useSelector((state) => state.pantry.myIngredients)
    const dispatch = useDispatch()

    return (
        <div className="kitchenDiv">
            <h1 className="kitchenTitle">My Custom Ingredients
                <NewIngredientModal />
            </h1>
            <div id='ingredientsListDiv'>
                {myIngredients && myIngredients.map((ingredient) => (
                    <div id={`${ingredient.name}Div`} className="ingredientDiv">
                        <h5>{ingredient.name}
                                <EditIngredientModal currIngredient={ingredient} />
                                <i
                                    className="fas fa-trash-alt fridgeBtns"
                                    onClick={() => dispatch(pantryActions.deleteIngredient(ingredient.id))}
                                >
                                </i>
                        </h5>
                        <img src={ingredient.imgUrl} alt={`${ingredient.name}`} width={"48px"} height={"48px"} />
                        <p className='reciP'>{ingredient.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyIngredientsComponent;
