import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as kitchenActions from "../../store/kitchen";
import * as recipeActions from "../../store/cookbook"
import * as ingredientActions from "../../store/pantry"
import './Recipes.css'

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
            {sessionUser &&
                <div>
                    <h1 className='recipesTitle'>
                        Recipes
                    </h1>
                    <div id='recipesListDiv'>
                        {recipes && recipes.map((recipe, i) => (
                            <div id={`${recipe.name}Div`} className="recipeDiv">
                                <h5>{recipe.name}</h5>
                                <img src={recipe.imgUrl} alt={`Image of ${recipe.name}`} />
                                <ol>Ingredients
                                    {ingredients && ingredients[i].map((ingredient, j) => (
                                        <h6>{ingredient.name}</h6>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default RecipesComponent;
