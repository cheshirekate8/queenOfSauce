import { csrfFetch } from "./csrf.js";
import { getOneFridgesIngredients } from "./kitchen.js";

const GET_RECIPES = '/recipes'
const COOK_FUNC = '/cook'

const getRec = (list) => ({
    type: GET_RECIPES,
    list
})

// export const cook = (fridgeId, recipeId) => async dispatch => {
//     // const fridgeingredients = await dispatch(getOneFridgesIngredients(fridgeId))

//     const response = await csrfFetch(`/api/recipes/${recipeId}`)
//     if (response.ok) {
//         const recipe = await response.json();
//         return recipe
//     }
// }

export const getRecipes = () => async dispatch => {
    const response = await csrfFetch('/api/recipes')
    if (response.ok) {
        const recipes = await response.json();
        dispatch(getRec(recipes));
    }
}

const initialState = { recipes: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_RECIPES:
            // const allRecs = {};
            // action.list.forEach(recipe => {
            //     allRecs[recipe.id] = recipe
            // })
            newState = {
                ...state,
                recipes: action.list
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;
