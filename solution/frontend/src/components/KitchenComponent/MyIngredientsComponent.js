import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import { Redirect } from "react-router-dom";
import NewFridgeModal from "../NewFridgeModal";
import EditFridgeModal from "../EditFridgeModal";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"
import * as pantryActions from "../../store/pantry"

function MyIngredientsComponent() {

    return (
        <div className="kitchenDiv">
            <h1>My Custom Ingredients</h1>
        </div>
    );
}

export default MyIngredientsComponent
;
