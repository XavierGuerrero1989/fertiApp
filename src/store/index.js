import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, listReducer, tratamientoReducer } from "./reducers";


const rootReducer = combineReducers({
    tratamientos: tratamientoReducer,
    list: listReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));