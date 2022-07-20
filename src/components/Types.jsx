import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

const Types = ({ navigation }) => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Cart")}
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

			<View style={styles.typeContainer}>
				<Image
					// source={{ uri: shoe }}
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
			<View style={styles.typeContainer}>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
			<View style={styles.typeContainer}>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
			<View style={styles.typeContainer}>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
			<View style={styles.typeContainer}>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
			<View style={styles.typeContainer}>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Footwear</Text>
			</View>
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
		width: 110,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
