import { csrfFetch } from "./csrf.js";

const GET_RECIPES = '/recipes'

const CONVERT = '/convert'

const getRec = (list) => ({
    type: GET_RECIPES,
    list
})

const convert = (payload) => ({
    type: CONVERT,
    payload
})

export const getRecipes = () => async dispatch => {
    const response = await csrfFetch('/api/recipes')
    if (response.ok) {
        const recipes = await response.json();
        dispatch(getRec(recipes));
    }
}

export const recipeToIngredient = (recipeId) => async dispatch => {
    const response = await csrfFetch(`/api/recipes/ingredient/${recipeId}`)
    if (response.ok) {
        const ingredient = await response.json();
        dispatch(convert(ingredient));
        console.log(ingredient)
        return ingredient
    }
}

const initialState = { recipes: null, currRecipe: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_RECIPES:
            newState = {
                ...state,
                recipes: action.list
            }
            return newState;
        case CONVERT:
            newState = {
                ...state,
                currRecipe: action.payload
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;
