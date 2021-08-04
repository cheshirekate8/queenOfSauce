import { csrfFetch } from "./csrf.js";

const GET_RECIPES = '/recipes'

const getRec = (list) => ({
    type: GET_RECIPES,
    list
})

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
