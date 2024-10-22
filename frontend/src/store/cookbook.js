import { csrfFetch } from "./csrf.js";

const GET_RECIPES = "/recipes";
const CONVERT = "/convert";

const getRec = (list) => ({
  type: GET_RECIPES,
  list,
});

const convert = (payload) => ({
  type: CONVERT,
  payload,
});

export const getRecipes = () => async (dispatch) => {
  const response = await csrfFetch("/api/recipes");
  if (response.ok) {
    const recipes = await response.json();
    dispatch(getRec(recipes));
  }
};

export const recipeToIngredient = (recipeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/recipes/ingredient/${recipeId}`);
  if (response.ok) {
    const ingredient = await response.json();
    dispatch(convert(ingredient));
    return ingredient;
  }
};

const initialState = { recipes: null, currRecipe: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.list,
      };
    case CONVERT:
      return {
        ...state,
        currRecipe: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
