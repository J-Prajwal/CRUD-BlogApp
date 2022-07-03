import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./Blog/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
