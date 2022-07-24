import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainContainer from "./src/MainContainer";
import store from "./store";
import { Provider as PaperProvider } from "react-native-paper";
import { ToastContainer } from "@jamsch/react-native-toastify";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider>
				<MainContainer />
				<ToastContainer />
			</PaperProvider>
		</Provider>
	);
}
