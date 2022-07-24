import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";
import shopActions from "../../redux/actions/shopActions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const FancyScreen = ({ navigation, route }) => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const [fancyShoes, setFancyShoes] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByType(id)).then((res) =>
			setFancyShoes(res.data.response)
		);
	}, []);

	const ProductCard = ({ data }) => {
		return (
			<LinearGradient
				colors={["black", "#C8C6C6", "#F7F5F2"]}
				style={{
					width: "46%",
					marginVertical: 10,
					// borderWidth: 1,
					height: 230,
					justifyContent: "center",
					// alignItems: "center",
					backgroundColor: "red",
					borderTopLeftRadius: 20,
					borderBottomRightRadius: 20,
				}}
				start={{ x: 0, y: 0.8 }}
				end={{ x: 0.8, y: 1 }}
				key={data._id}
			>
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View style={{ marginLeft: 12 }}>
							<Text
								style={{
									fontSize: 20,
									color: "white",
									fontWeight: "600",
									marginBottom: 5,
									marginTop: 10,
								}}
							>
								{data.brand.name}
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: "white",
									fontWeight: "600",
									marginBottom: 5,
								}}
							>
								{data.type?.name}
							</Text>
						</View>
						<View>
							<TouchableOpacity
								style={{
									borderRadius: 100,
									overflow: "hidden",
									margin: 5,
								}}
								onPress={() =>
									navigation.navigate("Detail", { id: data._id })
								}
							>
								<MaterialCommunityIcons
									name="plus"
									style={{
										fontSize: 15,
										color: "white",
										padding: 5,
										backgroundColor: "black",
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						height: 100,
						borderRadius: 10,
						backgroundColor: " #F0F0F3",
						position: "relative",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 8,
					}}
				>
					<Image
						source={{ uri: data.image[0] }}
						style={{
							width: "80%",
							height: "80%",
							resizeMode: "contain",
						}}
					/>
				</View>
				<View style={{ marginBottom: 5, marginLeft: 12 }}>
					<Text
						style={{
							fontSize: 10,
							color: "#EDDFB3",
							fontWeight: "600",
							marginBottom: 4,
							marginRight: 15,
						}}
					>
						{data.name}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: "#EDDFB3",
							fontWeight: "600",
						}}
					>
						&#36; {data.price}
					</Text>
				</View>
			</LinearGradient>
		);
	};

	return (
		<SafeAreaView>
			{/*INPUT*/}
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
						onPress={() => navigation.navigate("Cart")}
					/>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					height: "90%",
					backgroundColor: "#f5f5f5",
				}}
			>
				<StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
				<ScrollView showVerticalScrollIndicator={false}>
					<View
						style={{
							padding: 16,
							backgroundColor: "white",
							borderTopRightRadius: 34,
							borderTopLeftRadius: 34,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{ flexDirection: "row", alignItems: "center" }}
							>
								<Text
									style={{
										fontSize: 18,
										color: "#000000",
										fontWeight: "500",
										letterSpacing: 1,
									}}
								>
									Products
								</Text>
								<Text
									style={{
										fontSize: 14,
										color: "#000000",
										fontWeight: "400",
										opacity: 0.5,
									}}
								>
									{fancyShoes?.length}
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								justifyContent: "space-around",
							}}
						>
							{fancyShoes?.map((data) => {
								return <ProductCard data={data} key={data._id} />;
							})}
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default FancyScreen;

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
});
