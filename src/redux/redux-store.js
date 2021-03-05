import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

import messagesReducer from "./messages-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    messagesData: messagesReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
