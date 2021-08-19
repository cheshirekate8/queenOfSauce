import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import * as kitchenActions from "../../store/kitchen";
import EditQuantityModal from "../EditQuantityModal";

function MyFridgesComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)

    useEffect(() => {
        dispatch(kitchenActions.getFridges(sessionUser?.id))
    }, [dispatch, sessionUser?.id]);

    return (
        <div className='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen
                <NewFridgeModal />
            </h1>
            {fridges && fridges.length > 0 ?
                (fridges && fridges.map((fridge, i) => (
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
                        <div className="ingDiv">
                            {fridge.FridgeIngredients.map(ingredient => (
                                <div className="oneIngDiv">
                                    <img
                                        src={ingredient.Ingredient.imgUrl}
                                        alt={ingredient.Ingredient.name}
                                        key={`${ingredient.Ingredient.name}key`}
                                        width={"48px"} height={"48px"}
                                    />
                                    <EditQuantityModal currIngredient={ingredient} />
                                    <div className="ingDel" onClick={() => dispatch(kitchenActions.deleteFromFridge(ingredient.id, sessionUser.id))}>x</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )))
                :
                (<div>You have no refrigerators! Create one by clicking the + sign on the right!</div>)}
        </div>
    );
}

export default MyFridgesComponent;
