const initialState = {
	typeShoes: [],
};

const typeShoesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TYPE_SHOES":
			return {
				...state,
				typeShoes: action.payload,
			};
		default:
			return state;
	}
};

export default typeShoesReducer;
