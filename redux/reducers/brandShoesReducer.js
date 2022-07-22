const initialState = {
	brandShoes: [],
};

const brandShoesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_BRAND_SHOES":
			return {
				...state,
				brandShoes: action.payload,
			};
		default:
			return state;
	}
};

export default brandShoesReducer;
