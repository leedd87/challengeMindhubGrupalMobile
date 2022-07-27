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
		// console.log(product)

		return async (dispatch, getState) => {
			dispatch({
				type: "DELETE_TO_SHOP",
				payload: { product },
			});
		};
	},

	verifyShopStorage: (shopStorage) => {
		return async (dispatch, getState) => {
			dispatch({
				type: "VERIFY_SHOP_STORAGE",
				payload: { shopStorage },
			});
		};
	},

	deleteAllToShop: () => {
		return async (dispatch, getState) => {
			dispatch({
				type: "DELETE_ALL_TO_SHOP",
				// payload: { product },
			});
		};
	},
};

export default shopActions;
