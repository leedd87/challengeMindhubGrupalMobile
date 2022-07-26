import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { toast } from "@jamsch/react-native-toastify";
import { useState, useEffect } from "react";

const CartScreen = ({ navigation }) => {
	const cart = useSelector((store) => store.shopReducer.productsInShop);
	console.log(cart);

	const renderProducts = (data, index) => {
		return (
			<TouchableOpacity
				// onPress={() => {
				// 	navigation.navigate("ProductInfo", { productID: data.id });
				// }}
				key={index}
				style={{
					width: "100%",
					height: 100,
					marginVertical: 6,
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: "30%",
						height: 100,
						padding: 14,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#F0F0F3",
						borderRadius: 10,
						marginRight: 22,
					}}
				>
					<Image
						source={{ uri: data.image }}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					/>
				</View>
				<View
					style={{
						flex: 1,
						height: "100%",
						justifyContent: "space-around",
					}}
				>
					<View style={{}}>
						<Text
							style={{
								fontSize: 14,
								maxWidth: "100%",
								color: "#000000",
								fontWeight: "600",
								letterSpacing: 1,
							}}
						>
							{data.name}
						</Text>
						<View
							style={{
								marginTop: 4,
								flexDirection: "row",
								alignItems: "center",
								opacity: 0.6,
							}}
						>
							<Text
								style={{
									fontSize: 14,
									fontWeight: "400",
									maxWidth: "85%",
									marginRight: 4,
								}}
							>
								&#36;{data.price}
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View
							style={{
								flexDirection: "row",

								alignItems: "center",
							}}
						>
							<View
								style={{
									borderRadius: 100,
									marginRight: 20,
									padding: 4,
									borderWidth: 1,
									borderColor: "#777777",
								}}
							>
								<MaterialCommunityIcons
									name="minus"
									style={{
										fontSize: 16,
										color: "#777777",
									}}
								/>
							</View>
							<Text>1</Text>
							<View
								style={{
									borderRadius: 100,
									marginLeft: 20,
									padding: 4,
									borderWidth: 1,
									borderColor: "#777777",
								}}
							>
								<MaterialCommunityIcons
									name="plus"
									style={{
										fontSize: 16,
										color: "#777777",
									}}
								/>
							</View>
						</View>
						<TouchableOpacity
							//onPress={() => removeItemCart(data.id)}
							style={{ overflow: "hidden", borderRadius: 100 }}
						>
							<MaterialCommunityIcons
								name="delete-outline"
								style={{
									fontSize: 16,
									color: "#777777",
									backgroundColor: "#F0F0F3",
									padding: 8,
									borderRadius: 100,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		// <View>
		// 	<ScrollView style={{ height: "90%" }}>
		// 		{cart &&
		// 			cart.map((item, index) => (
		// 				<View
		// 					key={index}
		// 					style={{
		// 						borderWidth: 2,
		// 						width: "100%",
		// 						justifyContent: "flex-start",
		// 						flexDirection: "row",
		// 						alignItems: "center",
		// 						marginVertical: 10,
		// 					}}
		// 				>
		// 					<Text>{item.name}</Text>
		// 					<Image
		// 						source={{ uri: item.image }}
		// 						style={{ height: 100, width: 150 }}
		// 					/>
		// 				</View>
		// 			))}
		// 	</ScrollView>
		// 	<View
		// 		style={{
		// 			flexDirection: "row",
		// 			justifyContent: "space-around",
		// 			alignItems: "center",
		// 			height: "10%",
		// 		}}
		// 	>
		// 		<TouchableOpacity onPress={() => navigation.navigate("Shop")}>
		// 			<Text>SEGUIR COMPRANDO</Text>
		// 		</TouchableOpacity>
		// 		<TouchableOpacity>
		// 			<Text>FINALIZAR COMPRA</Text>
		// 		</TouchableOpacity>
		// 	</View>
		// </View>
		<SafeAreaView>
			<View
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: "#ffffff",
					position: "relative",
				}}
			>
				<ScrollView>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
							paddingTop: 16,
							paddingHorizontal: 16,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 14,
								color: "#000000",
								fontWeight: "400",
							}}
						>
							Order Details
						</Text>
						<View></View>
					</View>
					<Text
						style={{
							fontSize: 20,
							color: "#000000",
							fontWeight: "500",
							letterSpacing: 1,
							paddingTop: 20,
							paddingLeft: 16,
							marginBottom: 10,
						}}
					>
						My Cart
					</Text>
					<View style={{ paddingHorizontal: 16 }}>
						{cart ? cart.map(renderProducts) : null}
					</View>
					<View>
						<View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
							<Text
								style={{
									fontSize: 16,
									color: "#000000",
									fontWeight: "500",
									letterSpacing: 1,
									marginBottom: 20,
								}}
							>
								Delivery Location
							</Text>
						</View>
						<View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
							<Text
								style={{
									fontSize: 16,
									color: "#000000",
									fontWeight: "500",
									letterSpacing: 1,
									marginBottom: 20,
								}}
							>
								Payment Method
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<View
									style={{
										flexDirection: "row",
										width: "80%",
										alignItems: "center",
									}}
								>
									<View
										style={{
											color: "#0043F9",
											backgroundColor: "#F0F0F3",
											alignItems: "center",
											justifyContent: "center",
											padding: 12,
											borderRadius: 100,
											marginRight: 18,
										}}
									>
										<Text
											style={{
												fontSize: 10,
												fontWeight: "900",
												color: "#0043F9",
												letterSpacing: 1,
											}}
										>
											VISA
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontSize: 14,
												color: "#000000",
												fontWeight: "500",
											}}
										>
											Visa Classic
										</Text>
										<Text
											style={{
												fontSize: 12,
												color: "#000000",
												fontWeight: "400",
												lineHeight: 20,
												opacity: 0.5,
											}}
										>
											****-9092
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={{
								paddingHorizontal: 16,
								marginTop: 40,
								marginBottom: 80,
							}}
						>
							<Text
								style={{
									fontSize: 16,
									color: "#000000",
									fontWeight: "500",
									letterSpacing: 1,
									marginBottom: 20,
								}}
							>
								Order Info
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: 8,
								}}
							>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "400",
										maxWidth: "80%",
										color: "#000000",
										opacity: 0.5,
									}}
								>
									Subtotal
								</Text>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "400",
										maxWidth: "80%",
										color: "#000000",
										opacity: 0.8,
									}}
								>
									&#36;200.00
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: 22,
								}}
							>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "400",
										maxWidth: "80%",
										color: "#000000",
										opacity: 0.5,
									}}
								>
									Shipping Tax
								</Text>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "400",
										maxWidth: "80%",
										color: "#000000",
										opacity: 0.8,
									}}
								>
									&#36;200
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Text
									style={{
										fontSize: 12,
										fontWeight: "400",
										maxWidth: "80%",
										color: "#000000",
										opacity: 0.5,
									}}
								>
									Total
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: "500",
										maxWidth: "80%",
										color: "#000000",
									}}
								>
									&#36;{2200 + 200 / 20}
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>
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
					<TouchableOpacity
						// onPress={() => (total != 0 ? checkOut() : null)}
						style={{
							width: "86%",
							height: "90%",
							backgroundColor: "#0043F9",
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
							CHECKOUT( &#36;{200 + 200 / 20})
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default CartScreen;

const styles = StyleSheet.create({});
