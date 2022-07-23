import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Types from "../components/Types";
import { LinearGradient } from "expo-linear-gradient";
import HomeGrid from "../components/HomeGrid";
import Brands from "../components/Brands";

const height = Dimensions.get("window").height;

const adidasShoes =
	"https://media.discordapp.net/attachments/998602282113445979/999392011771715644/adidas-removebg-preview.png";

const newBalanceShoes =
	"https://reactsport.herokuapp.com/img/productImages/shoe_newbalance_01.png";
const HomeScreen = ({ navigation }) => {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(shoesActions.getShoes());
	// }, []);

	const shoes = useSelector((store) => store.shoesReducer.shoes);

	return (
		<View>
			<View style={{ height: "40%" }}>
				<View style={styles.container}>
					<TextInput
						style={styles.input}
						onChangeText={(text) => {
							setInput(text);
							console.log(text);
							navigation.navigate("Cart");
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
						onPress={() => navigation.navigate("Cart")}
					/>

					<StatusBar style="auto" />
				</View>
				<View style={{ marginBottom: 15 }}>
					<Text style={{ fontWeight: "bold", textAlign: "center" }}>
						Popular Shoes
					</Text>
				</View>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
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
								width: 145,
								borderRadius: 15,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={{ color: "white", fontSize: 20 }}>NIKE</Text>
						</LinearGradient>

						<Image
							source={require("../assets/images/nike_shoes.png")}
							style={{ width: 150, height: 150 }}
						></Image>
					</LinearGradient>
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
							<Text
								style={{
									color: "white",
									fontSize: 20,
								}}
							>
								ADIDAS
							</Text>
						</LinearGradient>

						<Image
							source={{ uri: adidasShoes }}
							style={{
								width: 200,
								height: 200,
								transform: [{ rotate: "-35deg" }],
							}}
						></Image>
					</LinearGradient>
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
							<Text style={{ color: "white", fontSize: 20 }}>
								NEW BALANCE
							</Text>
						</LinearGradient>

						<Image
							source={{ uri: newBalanceShoes }}
							style={{ width: 150, height: 150 }}
						></Image>
					</LinearGradient>
				</ScrollView>
				<View>
					<Types navigation={navigation} />
				</View>
			</View>

			<View style={{ height: "50%" }}>
				<HomeGrid />
			</View>
			<View style={{ height: "10%" }}>
				<Brands />
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
		height: "25%",
	},
	input: {
		height: 40,
		margin: 12,
		width: 300,
		borderWidth: 1,
		padding: 10,
		borderRadius: 13,
	},
	hero: {
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: "blue",
		marginHorizontal: 10,
		borderRadius: 30,
		width: 350, //tamanio contenedor
	},
});
