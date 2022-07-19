import { combineReducers } from "redux";
import shoesReducer from "./shoesReducer";

const mainReducer = combineReducers({
	shoesReducer,
});

export default mainReducer;
