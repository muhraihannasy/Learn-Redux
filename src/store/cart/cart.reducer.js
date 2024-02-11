import { CART_TYPE_ACTION } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  amount_order_price: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_TYPE_ACTION.ADD_TO_CART:
      const newProduct = action.payload;
      const prevCart = state.cartItems.filter(
        (item) => item.id == newProduct.id
      );

      if (prevCart?.length == 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, newProduct],
        };
      }

      return state;
    default:
      return state;
  }
};

export default CartReducer;
