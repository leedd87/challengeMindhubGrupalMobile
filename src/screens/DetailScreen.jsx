import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	ScrollView,
	TouchableOpacity,
	FlatList,
	Image,
	Dimensions,
	Animated,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";
import { useState, useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const DetailScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [shoe, setShoe] = useState();
	const [shoeImage, setShoeImage] = useState([]);
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getOneShoe(id)).then((res) => {
			setShoe(res.data.response);
			setShoeImage(res.data.response.image);
		});
	}, []);

	console.log(shoe);
	console.log(shoeImage);

	const width = Dimensions.get("window").width;
	const scrollX = new Animated.Value(0);

	let position = Animated.divide(scrollX, width);

	const renderProduct = ({ item, index }) => {
		return (
			<View
				key={index}
				style={{
					width: width,
					height: 240,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Image
					source={{ uri: item }}
					style={{ width: "100%", height: "100%", resizeMode: "contain" }}
				/>
			</View>
		);
	};
	return (
		<SafeAreaView>
			<View
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "#ffffff",
					position: "relative",
				}}
			>
				<StatusBar backgroundColor="#F0F0F3" barStyle="dark-content" />
				<ScrollView>
					<View
						style={{
							width: "100%",
							backgroundColor: "white", //color light
							borderBottomRightRadius: 20,
							borderBottomLeftRadius: 20,
							position: "relative",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: 4,
						}}
					>
						<View
							style={{
								width: "100%",
								flexDirection: "row",
								justifyContent: "space-between",
								paddingTop: 16,
								paddingLeft: 16,
							}}
						>
							{/* <TouchableOpacity
								onPress={() => {
									navigation.goBack(); //probar
								}}
							>
								<Entypo
									name="chevron-left"
									style={{
										fontSize: 18,
										color: "#777777",
										padding: 12,
										backgroundColor: "#ffffff",
										borderRadius: 10,
										borderWidth: 1,
									}}
								/>
							</TouchableOpacity> */}
						</View>
						<FlatList
							data={shoeImage ? shoeImage : null} //probando
							horizontal
							renderItem={renderProduct}
							showsHorizontalScrollIndicator={false}
							decelerationRate={0.8}
							snapToInterval={width}
							bounces={false}
							onScroll={Animated.event(
								[{ nativeEvent: { contentOffset: { x: scrollX } } }],
								{ useNativeDriver: false }
							)}
						/>
						<View
							style={{
								width: "100%",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								marginBottom: 16,
								marginTop: 32,
							}}
						>
							{shoeImage //map de imagenes
								? shoeImage.map((data, index) => {
										let opacity = position.interpolate({
											inputRange: [index - 1, index, index + 1],
											outputRange: [0.2, 1, 0.2],
											extrapolate: "clamp",
										});
										return (
											<Animated.View
												key={index}
												style={{
													width: "16%",
													height: 2.4,
													backgroundColor: "#000000",
													opacity,
													marginHorizontal: 4,
													borderRadius: 100,
												}}
											></Animated.View>
										);
								  })
								: null}
						</View>
					</View>
					<View style={{ paddingHorizontal: 16, marginTop: 6 }}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginVertical: 14,
							}}
						>
							<Entypo
								name="shopping-cart"
								style={{
									fontSize: 18,
									color: "black",
									marginRight: 6,
								}}
							/>
							<Text style={{ fontSize: 12, color: "#000000" }}>
								Shopping
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginVertical: 4,
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "600",
									letterSpacing: 0.5,
									marginVertical: 4,
									color: "#000000",
									maxWidth: "84%",
								}}
							>
								{shoe?.name}
							</Text>
						</View>
						<Text
							style={{
								fontSize: 12,
								color: "#000000",
								fontWeight: "400",
								letterSpacing: 1,
								opacity: 0.5,
								// lineHeight: 20,
								width: "100%",
								height: "30%",
								marginBottom: 18,
							}}
						>
							{shoe?.description}
						</Text>

						<View
							style={{
								paddingHorizontal: 16,
							}}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "500",
									maxWidth: "85%",
									color: "#000000",
									marginBottom: 4,
								}}
							>
								&#8377; {shoe?.price}.00
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: 10,
					height: "8%",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{/*AGREGAR CARRITO*/}
				<TouchableOpacity
					// onPress={() =>
					// 	shoe.isAvailable ? addToCart(product.id) : null
					// }
					style={{
						width: "86%",
						height: "90%",
						backgroundColor: "rgb(0, 128, 0)",
						borderRadius: 20,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: 12,
							fontWeight: "500",
							letterSpacing: 1,
							color: "#ffffff",
							textTransform: "uppercase",
						}}
					>
						{shoe?.stock > 0 ? "Add to cart" : "Not Avialable"}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({});
