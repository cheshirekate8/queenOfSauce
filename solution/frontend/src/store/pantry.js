import { csrfFetch } from "./csrf.js";

const GET_INGREDIENTS = '/ingredients'

const getIng = (list) => ({
    type: GET_INGREDIENTS,
    list
})


export const getIngredients = () => async dispatch => {
    const response = await csrfFetch('/api/ingredients')
    if (response.ok) {
        const ingredients = await response.json();
        dispatch(getIng(ingredients));
    }
}

const initialState = { ingredients: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_INGREDIENTS:
            // const allIngs = {};
            // action.list.forEach(ingredient => {
            //     allIngs[ingredient.id] = ingredient
            // })
            newState = {
                ...state,
                ingredients: action.list
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;
