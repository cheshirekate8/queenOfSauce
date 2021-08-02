import { csrfFetch } from "./csrf.js";

const GET_RECIPES = '/recipes'
// const LOAD = 'api/inns/LOAD'

const getRec = (list) => ({
    type: GET_RECIPES,
    list
})
// const load = (list) => ({
//     type: LOAD,
//     list,
// });


export const getRecipes = () => async dispatch => {
    const response = await csrfFetch('/api/recipes')
    if (response.ok) {
        const recipes = await response.json();
        dispatch(getRec(recipes));
    }
}
// export const getInns = () => async dispatch => {
//     const response = await csrfFetch('/api/inns');

//     if (response.ok) {
//         const list = await response.json();
//         dispatch(load(list));
//       }
// }

const initialState = { recipes: {} };
// const initialState = { list: [] };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_RECIPES:
            const allRecs = {};
            action.list.forEach(recipe => {
                allRecs[recipe.id] = recipe
            })
            newState = {
                ...state,
                recipes: allRecs
            }
            return newState;
        default:
            return state;
    }
}
// const innsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD: {
//             const allInns = {};
//             action.list.forEach(inn => {
//                 allInns[inn.id] = inn;
//             });
//             return {
//                 // ...allInns,
//                 ...state,
//                 list: action.list,
//             };
//         }

//         default:
//             return state;
//     }
// }

export default reducer;
