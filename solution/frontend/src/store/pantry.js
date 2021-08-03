import { csrfFetch } from "./csrf.js";

const GET_INGREDIENTS = '/ingredients'
const NEW_INGREDIENT = '/newIngredient'

const getIng = (list) => ({
    type: GET_INGREDIENTS,
    list
})
const newIng = (payload) => ({
    type: NEW_INGREDIENT,
    payload
})


export const getIngredients = () => async dispatch => {
    const response = await csrfFetch('/api/ingredients')
    if (response.ok) {
        const ingredients = await response.json();
        dispatch(getIng(ingredients));
    }
}
export const newIngredient = (name, imgUrl, desc, userId) => async dispatch => {
    const response = await csrfFetch("/api/ingredients", {
        method: "POST",
        body: JSON.stringify({ name, imgUrl, desc, userId }),
    });
    if (response.ok) {
        const newIngredient = await response.json();
        dispatch(newIng(newIngredient))
        dispatch(getIngredients());
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
        case NEW_INGREDIENT:
            return state;
        default:
            return state;
    }
}

export default reducer;
