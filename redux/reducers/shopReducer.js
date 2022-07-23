const initialState = {
	productsInShop: [],
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_SHOP":
			let productsInShop = [...state.productsInShop];
			productsInShop.push(action.payload.product);
			return {
				...state,
				productsInShop: productsInShop,
			};

		default:
			return state;
	}
};

export default shopReducer;
