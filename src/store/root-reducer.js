import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default rootReducer;
