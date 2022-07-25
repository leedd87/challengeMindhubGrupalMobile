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

	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={{ height: 55 }}
		>
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
				<Icon name="grid-outline" size={20} color="black" />
				<Text>All</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Fancy", { id: typeShoes[2]._id })
				}
			>
				<Image
					source={{
						uri: "https://images-ext-2.discordapp.net/external/jcdtcBkaMTGGh4Lv17ucu-lVw2j4805AYk6NGwVOK2E/http/imgfz.com/i/YSpr6Kq.png",
					}}
					style={{
						width: 25,
						height: 25,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{
						uri: "https://images-ext-1.discordapp.net/external/9ECVeRSbrbJ9p2j4d6gfEEMzzYHlg-D0ytz52TdWoaU/https/d2r9epyceweg5n.cloudfront.net/stores/001/932/403/products/1201-f5123130972f8114e216490386212897-640-0.png",
					}}
					style={{
						width: 28,
						height: 28,
						marginRight: 5,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{
						uri: "https://images-ext-2.discordapp.net/external/y8aB0AFS583IEzwvk8kCnxQYTNujoNEQob8l8yKsllw/http/imgfz.com/i/0UzeBtY.png",
					}}
					style={{
						width: 25,
						height: 25,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
				/>
				<Text>Sport</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("Nike", { id: brandShoes[0]._id })
				}
			>
				<Image
					// source={{ uri: shoe }}
					source={{
						uri: "https://images-ext-1.discordapp.net/external/k0p61IVr7YFPbmqABDyZLwTMLQsSnmtnsWtWYo5nST0/http/imgfz.com/i/XOa2uhT.png",
					}}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{
						uri: "https://images-ext-1.discordapp.net/external/MiL1ediR6yhJJHNIgzlnoaPPprI-HtUQyB84h6BlH9k/http/imgfz.com/i/BYvCQ3F.png",
					}}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
				/>
				<Text>Adidas</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() =>
					navigation.navigate("NewBalance", { id: brandShoes[3]._id })
				}
			>
				<Image
					source={{
						uri: "https://images-ext-2.discordapp.net/external/jcdtcBkaMTGGh4Lv17ucu-lVw2j4805AYk6NGwVOK2E/http/imgfz.com/i/YSpr6Kq.png",
					}}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{ uri: "http://imgfz.com/i/2LcSzsB.png" }}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{ uri: "http://imgfz.com/i/JvSx3Ad.png" }}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{ uri: "http://imgfz.com/i/mxILA59.png" }}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{ uri: "http://imgfz.com/i/7MX26eY.png" }}
					style={{
						width: 28,
						height: 28,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
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
					source={{ uri: "http://imgfz.com/i/vSmZMn8.png" }}
					style={{
						width: 25,
						height: 25,
						marginRight: 10,
						transform: [{ rotate: "-35deg" }],
					}}
				></Image>
				<Text>Louis Vuittom</Text>
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
