import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Kitchen.css';
import { Redirect, Link } from "react-router-dom";
import NewFridgeModal from "../NewFridgeModal";
import * as kitchenActions from "../../store/kitchen"

function KitchenComponent() {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)


    let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
        })
    }

    useEffect(()=>{
      dispatch(kitchenActions.getFridges(sessionUser?.id))
  }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;

    return (
        <div id='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen
            <NewFridgeModal />
            </h1>
            {fridges && fridges.map((fridge, i) => (
                <div className='fridgeDiv'>
                    <div className='fridgeTitle'>
                        {fridge.name}
                        <div>
                            <i class="fas fa-edit fridgeBtns"></i>
                            <i class="fas fa-trash-alt fridgeBtns"></i>
                        </div>
                    </div>
                    {/* <img src={fridges[0].Ingredients[0].imgUrl} /> */}
                    {ingredients[i].map(ingredient => (
                        <>
                            <img src={ingredient.imgUrl} />
                        </>
                    ))}
                </div>
            ))}
            {/* <Link to='/'>Create a new fridge</Link> */}
        </div>
    );
}

export default KitchenComponent;
