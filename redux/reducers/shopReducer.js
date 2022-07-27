const initialState = {
	productsInShop: [],
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_SHOP":
			productsInShop = [...state.productsInShop];

			let productRepetido = productsInShop.find(
				(product) => product.id === action.payload.product.id
			);

			if (productRepetido === undefined) {
				// SI NO ESTA REPETIDO ENTRA ACA

				productsInShop.push(action.payload.product);

				//localStorage.setItem("carrito", JSON.stringify(productsInShop)); // hace que mi ls se vaya modificando en vivo
				return {
					...state,
					productsInShop: productsInShop,
				};
			} else {
				// SI ESTA REPETIDO ENTRA ACA

				productRepetido.cant = productRepetido.cant + 1;

				//	localStorage.setItem("carrito", JSON.stringify(productsInShop)); // hace que mi ls se vaya modificando en vivo
				return {
					...state,
					productsInShop: productsInShop,
				};
			}

		case "DELETE_TO_SHOP":
			productsInShop = [...state.productsInShop];
			let modifiedShop = productsInShop.filter(
				(product) => product.id !== action.payload.product.id
			);

			//localStorage.setItem('carrito', JSON.stringify(modifiesShop))
			return {
				...state,
				productsInShop: modifiedShop,
			};

		case "VERIFY_SHOP_STORAGE":
			return {
				productsInShop: action.payload.shopStorage,
			};

		case "DELETE_ALL_TO_SHOP":
			localStorage.removeItem("carrito");
			return {
				...state,
				productsInShop: [],
			};

		default:
			return state;
	}
};

export default shopReducer;
