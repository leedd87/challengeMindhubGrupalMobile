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
				onPress={() => navigation.navigate("Nike")}
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
				onPress={() => navigation.navigate("Adidas")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Adidas</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("NewBalance")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>New Balance</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Jordan")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Jordan</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Asics")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Asics</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Balenciaga")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Balenciaga</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Dior")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Dior</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Louis")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Louis Vuittom</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Fancy")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Fancy</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Urban")}
			>
				<Image
					source={require("../assets/images/nike_shoes.png")}
					style={{ width: 25, height: 25, marginRight: 5 }}
				></Image>
				<Text>Urban</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Sport")}
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
