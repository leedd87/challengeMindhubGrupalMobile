import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import typeShoesActions from "../../redux/actions/typeShoesActions";
import brandShoesActions from "../../redux/actions/brandShoesActions";

const Types = ({ navigation }) => {
	const dispatch = useDispatch();
	const [typeShoes, setTypeShoes] = useState();
	const [brandShoes, setBrandShoes] = useState();

	useEffect(() => {
		dispatch(typeShoesActions.getTypeShoes()).then((res) =>
			setTypeShoes(res.data.response.typeShoe)
		);
	}, []);

	useEffect(() => {
		dispatch(brandShoesActions.getBrandShoes()).then((res) =>
			setBrandShoes(res.data.response.brandShoe)
		);
	}, []);

	console.log(brandShoes);

	// const typeShoes = useSelector((store) => store.typeShoesReducer.typeShoes);

	// console.log(typeShoes?.typeShoe[0]);
	//{ id: typeShoes.typeShoe[0]._id }

	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Shop")}
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "white",
					margin: 8,
					padding: 10,
					borderRadius: 10,
					width: 85,
				}}
			>
				<Icon name="grid-outline" size={25} color="black" />
				<Text>All</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Nike", { id: brandShoes[0]._id })
				}
			>
				<Image
					// source={{ uri: shoe }}
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 30, height: 30, marginRight: 15 }}
				/>
				<Text style={{ fontSize: 16 }}>Nike</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Adidas", { id: brandShoes[1]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Adidas</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("NewBalance", { id: brandShoes[3]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>New Balance</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Jordan", { id: brandShoes[2]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Jordan</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Asics", { id: brandShoes[4]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Asics</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Balenciaga", { id: brandShoes[5]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Balenciaga</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Dior", { id: brandShoes[6]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Dior</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Louis", { id: brandShoes[7]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Louis Vuittom</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Fancy", { id: typeShoes[2]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Fancy</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Urban", { id: typeShoes[0]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Urban</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Sport", { id: typeShoes[1]._id })
				}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Sport</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default Types;

const styles = StyleSheet.create({
	typeContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		margin: 8,
		padding: 10,
		width: 125,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
