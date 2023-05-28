import { createStore, combineReducers } from "redux";
import { tratamientoReducer } from "./reducers";

const rootReducer = combineReducers({
    tratamientos: tratamientoReducer
});

export default createStore(rootReducer);