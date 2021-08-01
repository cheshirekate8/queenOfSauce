import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import './Kitchen.css';

function KitchenComponent() {

    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges)

    let ingredients = [];
    fridges?.forEach(fridge => {
        ingredients.push(fridge.Ingredients)
    })

    console.log(ingredients)

    if (!sessionUser) return <Redirect to="/" />;



    return (
        <div id='kitchenDiv'>
            <h1 className='kitchenTitle'>{sessionUser.username}'s Kitchen</h1>
            {fridges && fridges.map((fridge, i) => (
                <div className='fridgeDiv'>
                    <li>{fridge.name}</li>
                    {/* <img src={fridges[0].Ingredients[0].imgUrl} /> */}
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
