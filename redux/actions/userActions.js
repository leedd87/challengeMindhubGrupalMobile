import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const url = "http://localhost:4000/";
const url = "https://daftlab-back.herokuapp.com/";

const usersActions = {
	signUpUser: (userData) => {
		return async (dispatch, getState) => {
			try {
				const res = await axios.post(url + "api/users/signup", {
					userData,
				});

				dispatch({
					type: "SIGN_UP_MESSAGE", //cambio de nombre antes MESSAGE
					payload: {
						view: true,
						message: res.data.message,
						success: res.data.success,
					},
				});
				return res; //probando
			} catch (error) {
				console.log(error);
			}
		};
	},
	signInUser: (logedUser) => {
		return async (dispatch, getState) => {
			const res = await axios.post(url + "api/users/signin", { logedUser });

			if (res.data.success) {
				try {
					await AsyncStorage.setItem("token", res.data.response.token);
				} catch (error) {
					console.log(error);
				}
				dispatch({
					type: "SIGN_IN",
					payload: {
						view: true,
						userData: res.data.response.userData,
						message: res.data.message,
						success: res.data.success,
					},
				});
			} else {
				//si res.data.success es false solo pasa el mensaje
				dispatch({
					type: "SIGN_IN_FALSE_SUCCESS_MESSAGE",
					payload: {
						view: true,
						message: res.data.message,
						success: res.data.success,
					},
				});
			}

			return res; //probando
		};
	},

	signOutUser: () => {
		//parametro de deslogueo

		return async (dispatch, getState) => {
			try {
				await AsyncStorage.removeItem("token");
			} catch (error) {
				console.log(error);
			}
			dispatch({ type: "SIGN_OUT", payload: null });
		};
	},

	verifyToken: (token) => {
		return async (dispatch, getState) => {
			await axios
				.get(url + "api/users/signintoken", {
					headers: { Authorization: "Bearer " + token },
				})
				.then((user) => {
					// console.log("PASO POR USER DE VERIFYTOKEN");
					if (user.data.success) {
						// dispatch({ type: "SIGN_IN", payload: user.data.response }); //revisar si anda mal
						dispatch({
							type: "SIGN_IN",
							payload: {
								view: true,
								message: user.data.message,
								success: user.data.success,
								userData: user.data.response, //prueba
							},
						}); //revisar si anda mal
					} else {
						removeToken = async () => {
							try {
								await AsyncStorage.removeItem("token");
							} catch (error) {
								console.log(error);
							}
						};
					}
				})
				.catch((error) => {
					// console.log("PASO POR EL USER ACTION CATCH");

					if (error.response.status === 401)
						dispatch({
							type: "SIGN_IN_FALSE_SUCCESS_MESSAGE",
							payload: {
								view: true,
								message: "Please sign in again",
								success: false,
							},
						});
					removeToken = async () => {
						try {
							await AsyncStorage.removeItem("token");
						} catch (error) {
							console.log(error);
						}
					};
				});
		};
	},
};

export default usersActions;
