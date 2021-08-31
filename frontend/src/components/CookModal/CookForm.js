import React, { useEffect, useState } from "react";
import * as kitchenActions from "../../store/kitchen"
import { useDispatch, useSelector } from "react-redux";

function CookForm({ setShowModal, recipe }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const fridges = useSelector((state) => state.kitchen.fridges);
    const [currFridge, setCurrFridge] = useState(null);
    const [showCookButton, setShowCookButton] = useState(false)
    const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     checkIf(currFridge, recipe)
    // }, dispatch)


    const checkIf = async (fridgeId, recipe) => {
        const ingArray = await dispatch(kitchenActions.getOneFridgesIngredients(fridgeId))
        let testArr = []
        let anotherTestArr = []
        // console.log(ingArray)
        // console.log(currFridge)
        recipe.Ingredients.forEach(recIng => {
            console.log('RECIPE ING ===>', recIng)
            ingArray.forEach(refIng => {
                console.log('FRIDGE ING ===>', refIng)
                if (recIng.id === refIng.Ingredient.id) {
                    testArr.push(true)
                }
            })
        })

        if (testArr.length === recipe.Ingredients.length) {
            anotherTestArr.push('Can Cook')
            setShowCookButton(true)
            console.log(true)
            return true
        } else {
            anotherTestArr.push('Cant cook')
            setShowCookButton(false)
            console.log(false)
            return false
        }

    };

    const handleSubmit = (e) => {
        console.log('yaaaay')
    }

    let checker = async () => await checkIf(currFridge, recipe)
    console.log("CHECKER ======> ", checker())

    return (
        <>
            <h1 className='modalTitle'> Cook {recipe.name}?</h1>
            <form onSubmit={handleSubmit} className='modalForm'>
                {errors.length > 0 &&
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>}
                {fridges.length > 1 && (
                    <label className='modalLabels'>
                        Which Fridge?
                        <select
                            onChange={(e) => setCurrFridge(e.target.value)}
                        >
                            <option value="" disabled selected>Select your option</option>
                            {fridges.map(fridge => (
                                <option
                                    value={fridge.id}
                                >{fridge.name}
                                </option>
                            ))}
                        </select>
                    </label>
                )}
                {showCookButton ?
                (<button type="submit" className='modalBtns'>Cook!</button>)
                :
                (<div><br/>Please select a fridge with all the proper ingredients!</div>)}

            </form>
        </>
    );
}

export default CookForm;