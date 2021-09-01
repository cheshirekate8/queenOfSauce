import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as recipeActions from "../../store/cookbook";
import CookModal from "../CookModal";
import './Recipes.css';

function RecipesComponent() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const recipes = useSelector((state) => state.cookbook.recipes);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(recipeActions.getRecipes())
    }, [dispatch]);

    if (!sessionUser) return <Redirect to="/" />;

    return (
        <div id='recipesDiv'>
            <div>
                <h1 className='recipesTitle'>
                    Recipes
                    <input type='text' placeholder='Search' className='search-input' onChange={event => { setSearchTerm(event.target.value) }} />
                </h1>
                <div id='recipesListDiv'>
                    {recipes.filter((recipe) => {
                        if (searchTerm == '') {
                            return recipe
                        } else if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return recipe
                        }
                    }).map((recipe, i) => (
                        <div id={`${recipe.name}Div`} className="recipeDiv">
                            <h4>{recipe.name}</h4>
                            <img src={recipe.imgUrl} alt={recipe.name} width={"48px"} height={"48px"} />
                            <p className='reciP'>{recipe.desc}</p>
                            <div>
                                <h5 className='recIngTitle'>Ingredients</h5>
                                {recipe.RecipeIngredients && recipe.RecipeIngredients.map((ingredient) => (
                                    <p className='reciP'>{ingredient.Ingredient.name}</p>
                                ))}
                            </div>
                            <CookModal recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecipesComponent;
