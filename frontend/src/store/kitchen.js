import { csrfFetch } from "./csrf.js";

const GET_KITCHEN = '/kitchen'
const CLEAR_KITCHEN = '/clearKitchen'
const NEW_KITCHEN = '/newkitchen'
const DELETE_REF = '/deletefridge'
const EDIT_REF = '/editref'
const ADD_TO_FRIDGE = '/addtofridge'
const NUM_ING = '/numing'

const getKitchen = payload => ({
    type: GET_KITCHEN,
    payload
})

export const clearFridges = () => ({
    type: CLEAR_KITCHEN
})

const newKitchen = payload => ({
    type: NEW_KITCHEN,
    payload
})

const deleteRef = () => ({
    type: DELETE_REF,

})

const editRef = () => ({
    type: EDIT_REF,
})

const addToRef = () => ({
    type: ADD_TO_FRIDGE,
})

const numIng = (payload) => ({
    type: NUM_ING,
    payload
})

export const getFridges = userId => async dispatch => {
    const response = await csrfFetch(`/api/fridges/user/${userId}`)
    if (response.ok) {
        const fridges = await response.json();
        fridges.forEach(fridge => {
            fridge.Ingredients.forEach(async ingredient => {
                let count = await dispatch(countIngredients(fridge.id, ingredient.id))
                ingredient['count'] = count;
            })
        })
        dispatch(getKitchen(fridges));
        return fridges;
    }
}

export const newFridge = (userId, name) => async dispatch => {
    const response = await csrfFetch("/api/fridges", {
        method: "POST",
        body: JSON.stringify({ userId, name }),
    });
    const newFridge = await response.json();
    dispatch(newKitchen(newFridge));
    dispatch(getFridges(userId));
    return response;
}

export const deleteFridge = (fridgeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/fridges/${fridgeId}`, {
        method: 'DELETE'
    })
    const data = await response.json();
    dispatch(deleteRef());
    dispatch(getFridges(data.userId));
}

export const editFridge = (fridgeId, name) => async (dispatch) => {
    const response = await csrfFetch(`/api/fridges/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fridgeId, name }),
    })
    const data = await response.json();
    dispatch(editRef());
    dispatch(getFridges(data.userId))
}

export const addToFridge = (fridgeId, ingredientId, userId) => async dispatch => {
    const response = await csrfFetch("/api/fridges/ingredients", {
        method: "POST",
        body: JSON.stringify({ fridgeId, ingredientId }),
    });
    const addFridge = await response.json();
    dispatch(addToRef(addFridge));
    dispatch(getFridges(userId));
    return response;
}

export const countIngredients = (fridgeId, ingredientId) => async dispatch => {
    const response = await csrfFetch(`/api/fridges/${fridgeId}/ingredients/${ingredientId}`)
    const counter = await response.json();
    // console.log(counter)
    dispatch(numIng(counter))
    return counter;
}

const initialState = { fridges: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_KITCHEN:
            newState = {
                ...state,
                fridges: action.payload
            }
            return newState;
        case CLEAR_KITCHEN:
            return {
                ...state,
                fridges: null
            }
        default:
            return state;
    }
}

export default reducer;
