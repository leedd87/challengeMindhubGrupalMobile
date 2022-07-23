import { combineReducers } from "redux";
import shoesReducer from "./shoesReducer";
import typeShoesReducer from "./typeShoesReducer";
import brandShoesReducer from "./brandShoesReducer";
import shopReducer from "./shopReducer";

const mainReducer = combineReducers({
	shoesReducer,
	typeShoesReducer,
	brandShoesReducer,
	shopReducer,
});

export default mainReducer;
