import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import { Redirect } from "react-router-dom";
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"
import * as ingredientActions from "../../store/pantry"

function KitchenComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)


    useEffect(() => {
        dispatch(recipeActions.getRecipes())
        dispatch(ingredientActions.getIngredients())
        dispatch(kitchenActions.getFridges(sessionUser?.id))
    }, [dispatch, sessionUser?.id]);

    if (!sessionUser) return <Redirect to="/" />;

    let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
        })
    }

    return (
        <div id='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen
                <NewFridgeModal />
            </h1>
            {fridges && fridges.map((fridge, i) => (
                <div className='fridgeDiv' key={`${fridge.name}key`}>
                    <div className='fridgeTitle' id={fridge.name}>
                        {fridge.name}
                        <div>
                            <EditFridgeModal currFridge={fridge}/>
                            <i
                                className="fas fa-trash-alt fridgeBtns"
                                onClick={() => dispatch(kitchenActions.deleteFridge(fridge.id))}
                            >
                            </i>
                        </div>
                    </div>
                    {ingredients[i].map(ingredient => (
                        <>
                            <img src={ingredient.imgUrl} alt={ingredient.name}  key={`${ingredient.name}key`}/>
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KitchenComponent;
