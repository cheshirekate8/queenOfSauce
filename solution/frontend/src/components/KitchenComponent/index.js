import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import { Redirect, Link } from "react-router-dom";
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"

function KitchenComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)


    useEffect(() => {
        dispatch(recipeActions.getRecipes())
        dispatch(kitchenActions.getFridges(sessionUser?.id))
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;

    let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
        })
    }

    // const handleSubmit = () => console.log('success')

    // const editFridgeName = (fridge) => {
    //     let thing = document.getElementById(fridge.name)
    //     const editFridgeForm = (
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 type="text"
    //                 value={fridge.name}
    //                 required
    //             />
    //             <button type="submit">
    //                 <i class="fas fa-check fridgeBtns"></i>
    //             </button>
    //         </form>)

    //     console.log(editFridgeForm)
    //     // thing.innerHTML = `${editFridgeForm}`

    //     console.log('THING ', thing)
    //     console.log('FRIDGE ', fridge)
    // }


    return (
        <div id='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen
                <NewFridgeModal />
            </h1>
            {fridges && fridges.map((fridge, i) => (
                <div className='fridgeDiv'>
                    <div className='fridgeTitle' id={fridge.name}>
                        {fridge.name}
                        <div>
                            <EditFridgeModal currFridge={fridge}/>
                            <i
                                class="fas fa-trash-alt fridgeBtns"
                                onClick={() => dispatch(kitchenActions.deleteFridge(fridge.id))}
                            >
                            </i>
                        </div>
                    </div>
                    {ingredients[i].map(ingredient => (
                        <>
                            <img src={ingredient.imgUrl} />
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KitchenComponent;
