import { csrfFetch } from "./csrf.js";

const GET_KITCHEN = '/kitchen'
const CLEAR_KITCHEN = '/clearKitchen'
const NEW_KITCHEN = '/newkitchen'
const DELETE_REF = '/deletefridge'
const EDIT_REF = '/editref'

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

export const getFridges = userId => async dispatch => {
    const response = await csrfFetch(`/api/fridges/user/${userId}`)
    if (response.ok) {
        const fridges = await response.json();
        dispatch(getKitchen(fridges));
        return fridges;
    }
}

export const newFridge = (userId, name) => async dispatch => {
    const response = await csrfFetch("/api/fridges", {
        method: "POST",
        body: JSON.stringify({ userId, name }),
    });
    if (response.ok) {
        const newFridge = await response.json();
        dispatch(newKitchen(newFridge));
        const response2 = await csrfFetch(`/api/fridges/user/${userId}`)
        if (response2.ok) {
            const fridges = await response2.json();
            dispatch(getKitchen(fridges));
            return fridges;
        }
    }
}

export const deleteFridge = (fridgeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/fridges/${fridgeId}`, {
        method: 'DELETE'
    })
    const data = await response.json();
    dispatch(deleteRef());
    const response2 = await csrfFetch(`/api/fridges/user/${data.userId}`)
    if (response2.ok) {
        const fridges = await response2.json();
        dispatch(getKitchen(fridges));
        return fridges;
    }
}

export const editFridge = (fridgeId, name) => async (dispatch) => {
    const response = await csrfFetch(`/api/fridges/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fridgeId, name}),
    })
    const data = await response.json();
    console.log(data)
    dispatch(editFridge());
    const response2 = await csrfFetch(`/api/fridges/user/${data.userId}`)
    if (response2.ok) {
        const fridges = await response2.json();
        dispatch(getKitchen(fridges));
        return fridges;
    }
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
        case NEW_KITCHEN:
            return state;
        case DELETE_REF:
            return state
        default:
            return state;
    }
}

export default reducer;
