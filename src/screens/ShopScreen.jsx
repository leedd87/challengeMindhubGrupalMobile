import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";

const ShopScreen = ({ navigation }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shoesActions.getShoes());
	}, []);

	const shoes = useSelector((store) => store.shoesReducer.shoes);
	console.log(shoes);
	return (
		<SafeAreaView>
			<TouchableOpacity>
				<View
					style={{
						height: "10%",
					}}
				>
					<View style={styles.containerInput}>
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
					</View>
				</View>

				<View style={{ height: "90%" }}>
					<FlatList
						data={shoes}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) => {
							return (
								<View
									key={index}
									style={stylesCitiesScreen.citiesContainer}
								>
									{/* <CitiesCards
											city={item}
											navigation={navigation}
										/> */}
									<TouchableOpacity
										onPress={() =>
											navigation.navigate("Detail", {
												id: item._id,
											})
										}
									>
										<View style={stylesCard.container}>
											<Image
												source={{
													uri: item.image[0],
												}}
												style={{ height: 200 }}
											/>
											<Text style={stylesCard.text}>
												{item.name}
											</Text>
										</View>
									</TouchableOpacity>
								</View>
							);
						}}
					/>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ShopScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#30475E", // "#30475E",
		height: 600,
	},
	containerInput: {
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
		borderRadius: 13,
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

const stylesNotFound = StyleSheet.create({
	container: {
		backgroundColor: "#30475E",
		height: "100%",
		borderRadius: 34,
	},
	text: {
		textAlign: "center",
		fontSize: 25,
		padding: 10,
		backgroundColor: "#f5f5f5",
		margin: 30,
	},
});

const stylesCitiesScreen = StyleSheet.create({
	citiesContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#30475E",
	},
});

const stylesInput = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		fontSize: 20,
	},
});

//CITIES CARD STYLES
const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		borderColor: "#F05454",
		borderWidth: 8,
		borderRadius: "10%",
		marginBottom: 30,
		width: 320,
		marginTop: 15,
	},
	text: {
		textAlign: "center",
		backgroundColor: "#f5f5f5",
		fontSize: 20,
		padding: 10,
		// fontFamily: Poppins_500Medium,
	},
});
