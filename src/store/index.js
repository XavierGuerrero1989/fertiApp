import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tratamientoReducer } from "./reducers";

const rootReducer = combineReducers({
    tratamientos: tratamientoReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));