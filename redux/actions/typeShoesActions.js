import axios from "axios";

const typeShoesActions = {
	getTypeShoes: () => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				"https://daftlab-back.herokuapp.com/api/shoesType"
			);
			console.log(res.data.response);
			dispatch({ type: "GET_TYPE_SHOES", payload: res.data.response });
			return res;
		};
	},
};

export default typeShoesActions;
