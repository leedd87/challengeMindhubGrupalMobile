import { combineReducers } from "redux";
import shoesReducer from "./shoesReducer";
import typeShoesReducer from "./typeShoesReducer";

const mainReducer = combineReducers({
	shoesReducer,
	typeShoesReducer,
});

export default mainReducer;
