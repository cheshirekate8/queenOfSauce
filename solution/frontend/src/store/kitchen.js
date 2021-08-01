import { csrfFetch } from "./csrf.js";

const GET_KITCHEN = '/kitchen'
const CLEAR_KITCHEN ='/clearKitchen'

const getKitchen = payload => ({
    type: GET_KITCHEN,
    payload
})

export const clearFridges = () => ({
    type: CLEAR_KITCHEN
})

export const getFridges = userId => async dispatch => {
    const response = await csrfFetch(`/api/fridges/user/${userId}`)
    if (response.ok) {
        const fridges = await response.json();
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
        default:
            return state;
    }
}

export default reducer;
