import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainContainer from "./MainContainer";
import store from "./store";

export default function App() {
	return (
		<Provider store={store}>
			<MainContainer />
		</Provider>
	);
}
