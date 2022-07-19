const initialState = {
	shoes: [],
};

const shoesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_SHOES":
			return {
				...state,
				shoes: action.payload,
			};
		default:
			return state;
	}
};
export default shoesReducer;
