import axios from "axios";

const shoesActions = {
	getShoes: () => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				"https://daftlab-back.herokuapp.com/api/shoes"
			);
			console.log(res.data.response);
			dispatch({ type: "GET_SHOES", payload: res.data.response });
		};
	},

	getOneShoe: (id) => {
		return async (dispatch, getState) => {
			const res = await axios.get(
				`https://daftlab-back.herokuapp.com/api/shoes/${id}`
			);
			return res;
		};
	},
};
export default shoesActions;
