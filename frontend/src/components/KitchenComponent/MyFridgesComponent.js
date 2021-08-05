import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import * as kitchenActions from "../../store/kitchen";

function MyFridgesComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)

    let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
        })
    }

    return (
        <div className='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen
                <NewFridgeModal />
            </h1>
            {fridges && fridges.map((fridge, i) => (
                <div className='fridgeDiv' key={`${fridge.name}key`}>
                    <div className='fridgeTitle' id={fridge.name}>
                        {fridge.name}
                        <div>
                            <EditFridgeModal currFridge={fridge} />
                            <i
                                className="fas fa-trash-alt iconz"
                                onClick={() => dispatch(kitchenActions.deleteFridge(fridge.id))}
                            >
                            </i>
                        </div>
                    </div>
                    {ingredients[i].map(ingredient => (
                        <>
                            <img src={ingredient.imgUrl} alt={ingredient.name} key={`${ingredient.name}key`} />
                        </>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MyFridgesComponent;
