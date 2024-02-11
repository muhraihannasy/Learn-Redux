import { CART_TYPE_ACTION } from "./cart.types";

export const AddToCartItem = (id) => ({
  type: CART_TYPE_ACTION.ADD_TO_CART,
  payload: id,
});
