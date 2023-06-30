import { combineReducers } from "redux";
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";


export default combineReducers({
  authReducer,
  currentUserReducer
});
