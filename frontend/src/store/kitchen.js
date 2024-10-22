import { csrfFetch } from "./csrf.js";

const GET_KITCHEN = "/kitchen";
const CLEAR_KITCHEN = "/clearKitchen";
const NEW_KITCHEN = "/newkitchen";
const DELETE_REF = "/deletefridge";
const EDIT_REF = "/editref";
const ADD_TO_FRIDGE = "/addtofridge";
const EDIT_QUANTITY = "/editquantity";
const DELETE_FROM_FRIDGE = "/deletefromfridge";
const GET_ONE_FRIDGE_INGS = "/onefridgeing";

const getKitchen = (payload) => ({
  type: GET_KITCHEN,
  payload,
});

export const clearFridges = () => ({
  type: CLEAR_KITCHEN,
});

const newKitchen = (payload) => ({
  type: NEW_KITCHEN,
  payload,
});

const deleteRef = () => ({
  type: DELETE_REF,
});

const editRef = () => ({
  type: EDIT_REF,
});

const addToRef = () => ({
  type: ADD_TO_FRIDGE,
});

const editQuan = () => ({
  type: EDIT_QUANTITY,
});

const delFromFridge = () => ({
  type: DELETE_FROM_FRIDGE,
});

const getOneFridgeIng = () => ({
  type: GET_ONE_FRIDGE_INGS,
});

export const addToFridge =
  (ingredientId, fridgeId, quantity, userId) => async (dispatch) => {
    const response = await csrfFetch("/api/fridgeingredients", {
      method: "POST",
      body: JSON.stringify({ ingredientId, fridgeId, quantity }),
    });
    const addFridge = await response.json();
    dispatch(addToRef(addFridge));
    dispatch(getFridges(userId));
    return response;
  };

export const editQuantity =
  (fridgeIngredientId, quantity, userId) => async (dispatch) => {
    const response = await csrfFetch("/api/fridgeingredients", {
      method: "PATCH",
      body: JSON.stringify({ fridgeIngredientId, quantity }),
    });
    const edited = await response.json();
    dispatch(editQuan(edited));
    dispatch(getFridges(userId));
    return response;
  };

export const getFridges = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/fridges/user/${userId}`);
  if (response.ok) {
    const fridges = await response.json();
    dispatch(getKitchen(fridges));
    return fridges;
  }
};

export const newFridge = (userId, name) => async (dispatch) => {
  const response = await csrfFetch("/api/fridges", {
    method: "POST",
    body: JSON.stringify({ userId, name }),
  });
  const newFridge = await response.json();
  dispatch(newKitchen(newFridge));
  dispatch(getFridges(userId));
  return response;
};

export const deleteFridge = (fridgeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/fridges/${fridgeId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  dispatch(deleteRef());
  dispatch(getFridges(data.userId));
};

export const deleteFromFridge =
  (fridgeIngredientId, userId) => async (dispatch) => {
    const response = await csrfFetch(
      `/api/fridgeingredients/${fridgeIngredientId}`,
      {
        method: "DELETE",
      },
    );
    const data = await response.json();
    console.log(data);
    dispatch(delFromFridge());
    dispatch(getFridges(userId));
  };

export const editFridge = (fridgeId, name) => async (dispatch) => {
  const response = await csrfFetch(`/api/fridges/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fridgeId, name }),
  });
  const data = await response.json();
  dispatch(editRef());
  dispatch(getFridges(data.userId));
};

export const getOneFridgesIngredients = (fridgeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/fridges/${fridgeId}`);
  if (response.ok) {
    const oneFridgesIng = await response.json();
    dispatch(getOneFridgeIng(oneFridgesIng));
    return oneFridgesIng;
  }
};

const initialState = { fridges: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_KITCHEN:
      newState = {
        ...state,
        fridges: action.payload,
      };
      return newState;
    case CLEAR_KITCHEN:
      return {
        ...state,
        fridges: null,
      };
    default:
      return state;
  }
}

export default reducer;
