import { combineReducers } from "redux";
const INITIAL_STATE = {
  basket: [],
  user: null,
};

const filterItemFromBasketByIdBasket = (state, action) =>
  state.basket.filter((item) => item.idBasket !== action.item.idBasket);

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: filterItemFromBasketByIdBasket(state, action),
      };
    default:
      return state;
  }
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  basket: basketReducer,
  user: authReducer,
});
