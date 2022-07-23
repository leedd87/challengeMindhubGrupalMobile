const initialState = {
	shoes: [],
	filterShoes: [],
};

const shoesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_SHOES":
			return {
				...state,
				shoes: action.payload,
			};
		case "GET_BRAND_SHOE":
			return {
				...state,
				filterShoes: action.payload,
			};
		default:
			return state;
	}
};
export default shoesReducer;
