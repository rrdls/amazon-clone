export const addToBasket = (item) => {
  return { type: "ADD_TO_BASKET", item };
};

export const removeFromBasket = (item) => {
  return { type: "REMOVE_FROM_BASKET", item };
};

export const setUser = (user) => {
  return { type: "SET_USER", user };
};
