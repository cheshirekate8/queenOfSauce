import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as recipeActions from "../../store/cookbook";
import './Recipes.css';

function RecipesComponent() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const recipes = useSelector((state) => state.cookbook.recipes)

    useEffect(() => {
        dispatch(recipeActions.getRecipes())
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;

    let ingredients = [];
    if (recipes) {
        recipes?.forEach(recipe => {
            ingredients.push(recipe.Ingredients)
        })
    }

    return (
        <div id='recipesDiv'>
            <div>
                <h1 className='recipesTitle'>
                    Recipes
                </h1>
                <div id='recipesListDiv'>
                    {recipes && recipes.map((recipe, i) => (
                        <div id={`${recipe.name}Div`} className="recipeDiv">
                            <h4>{recipe.name}</h4>
                            <img src={recipe.imgUrl} alt={recipe.name} width={"48px"} height={"48px"} />
                            <p className='reciP'>{recipe.desc}</p>
                            <div>
                                <h5 className='recIngTitle'>Ingredients</h5>
                                {ingredients && ingredients[i].map((ingredient, j) => (
                                    <p className='reciP'>{ingredient.name}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecipesComponent;
