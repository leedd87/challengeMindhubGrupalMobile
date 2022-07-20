import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Types from "../components/Types";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(shoesActions.getShoes());
	// }, []);

	const shoes = useSelector((store) => store.shoesReducer.shoes);

	return (
		<View>
			<View style={styles.container}>
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
				<Icon
					name="cart-outline"
					size={35}
					color="black"
					style={{ marginRight: 15 }}
					onPress={() => navigation.navigate("Shop")}
				/>

				<StatusBar style="auto" />
			</View>
			<LinearGradient
				colors={["#00d4ff", "#59f523", "#e0edea"]}
				style={styles.hero}
				start={{ x: 0, y: 0.8 }}
				end={{ x: 1, y: 1 }}
			>
				<LinearGradient
					colors={["#5ce3ff", "#158c27", "#194f10"]}
					start={{ x: 0, y: 0.8 }}
					end={{ x: 1, y: 1 }}
					style={{
						// backgroundColor: "green",
						height: 120,
						width: 120,
						borderRadius: 15,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ color: "white", fontSize: 20 }}>Nike</Text>
				</LinearGradient>
				{/* </View> */}
				<Image
					// source={{ uri: shoe }}
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 150, height: 150 }}
				></Image>
				{/* </View> */}
			</LinearGradient>
			<Types navigation={navigation} />
			<View style={{ margin: 12 }}>
				<Text style={{ fontWeight: "bold" }}>Popular</Text>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		height: 40,
		margin: 12,
		width: 300,
		borderWidth: 1,
		padding: 10,
	},
	hero: {
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		padding: 10,
		backgroundColor: "blue",
		marginHorizontal: 20,
		borderRadius: 30,
	},
});
