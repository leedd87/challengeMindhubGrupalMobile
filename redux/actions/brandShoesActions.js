import axios from "axios";

const brandShoesActions = {
	getBrandShoes: () => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				"https://daftlab-back.herokuapp.com/api/brandShoes"
			);

			dispatch({ type: "GET_BRAND_SHOES", payload: res.data.response });
			return res;
		};
	},
};

export default brandShoesActions;
