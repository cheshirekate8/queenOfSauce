import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import { Redirect } from "react-router-dom";
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import MyIngredientsComponent from "./MyIngredientsComponent";
import MyFridgesComponent from "./MyFridgesComponent";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"
import * as pantryActions from "../../store/pantry"

function KitchenComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)


    useEffect(() => {
        dispatch(recipeActions.getRecipes())
        dispatch(pantryActions.getIngredients())
        dispatch(kitchenActions.getFridges(sessionUser?.id))
        dispatch(pantryActions.getMyIngredients(sessionUser?.id))
    }, [dispatch, sessionUser?.id]);

    if (!sessionUser) return <Redirect to="/" />;

    let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
        })
    }

    return (
        <>
            <MyFridgesComponent />
            <MyIngredientsComponent />
        </>
    );
}

export default KitchenComponent;
