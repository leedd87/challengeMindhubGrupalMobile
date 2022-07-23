const shopActions = {
	addToShop: (product) => {
		return async (dispatch, getState) => {
			dispatch({
				type: "ADD_TO_SHOP",
				payload: { product },
			});
		};
	},

	deleteToShop: (product) => {
		return async (dispatch, getState) => {
			dispatch();
		};
	},
};

export default shopActions;
