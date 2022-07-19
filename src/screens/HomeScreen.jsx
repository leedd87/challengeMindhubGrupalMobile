import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";

const HomeScreen = () => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shoesActions.getShoes());
	}, []);

	const shoes = useSelector((store) => store.shoesReducer.shoes);
	console.log(shoes);

	return (
		<View>
			<TextInput
				style={styles.input}
				onChangeText={(text) => {
					setInput(text);
					console.log(text);
				}}
				value={input}
				placeholder={"Search"}
				keyboardType="default"
			></TextInput>
			<StatusBar style="auto" />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		marginRight: 60,
		borderWidth: 1,
		padding: 10,
	},
});
