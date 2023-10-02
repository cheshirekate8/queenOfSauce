import { csrfFetch } from "./csrf.js";

const GET_INGREDIENTS = "/ingredients";
const GET_MY_INGREDIENTS = "/myIngredients";
const NEW_INGREDIENT = "/newIngredient";
const DELETE_INGREDIENT = "/deleteIngredient";
const EDIT_INGREDIENT = "/editIngredient";

const getIng = (list) => ({
  type: GET_INGREDIENTS,
  list,
});

const getMyIng = (list) => ({
  type: GET_MY_INGREDIENTS,
  list,
});

const newIng = (payload) => ({
  type: NEW_INGREDIENT,
  payload,
});

const editIng = () => ({
  type: EDIT_INGREDIENT,
});

const deleteIng = () => ({
  type: DELETE_INGREDIENT,
});

export const getIngredients = () => async (dispatch) => {
  const response = await csrfFetch("/api/ingredients");
  if (response.ok) {
    const ingredients = await response.json();
    dispatch(getIng(ingredients));
  }
};

export const getMyIngredients = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/ingredients/user/${userId}`);
  if (response.ok) {
    const ingredients = await response.json();
    dispatch(getMyIng(ingredients));
    return ingredients;
  }
};

export const newIngredient =
  (name, imgUrl, desc, userId) => async (dispatch) => {
    const response = await csrfFetch("/api/ingredients", {
      method: "POST",
      body: JSON.stringify({ name, imgUrl, desc, userId }),
    });
    const newIngredient = await response.json();
    dispatch(newIng(newIngredient));
    dispatch(getIngredients());
    dispatch(getMyIngredients(userId));
    return response;
  };

export const editIngredient =
  (ingredientId, name, imgUrl, desc, userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/ingredients/${ingredientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imgUrl, desc, userId }),
    });
    const data = await response.json();
    dispatch(editIng());
    dispatch(getIngredients());
    dispatch(getMyIngredients(data.userId));
    return response;
  };

export const deleteIngredient = (ingredientId) => async (dispatch) => {
  const response = await csrfFetch(`/api/ingredients/${ingredientId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  dispatch(deleteIng());
  dispatch(getIngredients());
  dispatch(getMyIngredients(data.userId));
};

const initialState = { ingredients: null, myIngredients: null };

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
        ingredients: action.list,
      };
      return newState;
    case GET_MY_INGREDIENTS:
      newState = {
        ...state,
        myIngredients: action.list,
      };
      return newState;
    default:
      return state;
  }
}

export default reducer;
