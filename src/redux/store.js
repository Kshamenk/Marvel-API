import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import reducer from "../redux/reducer.js";
import  thunkMiddleware  from "redux-thunk";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store