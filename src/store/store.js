import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger];
const composedEhanced = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, undefined, composedEhanced);

export default store;
