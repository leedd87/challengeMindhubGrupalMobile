import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CartScreen = ({ navigation }) => {
	const cart = useSelector((store) => store.shopReducer.productsInShop);
	console.log(cart);

	return (
		<View>
			<ScrollView>
				{cart &&
					cart.map((item, index) => (
						<View
							key={index}
							style={{
								borderWidth: 2,
								width: "100%",
								justifyContent: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Text>{item.name}</Text>
							<Image
								source={{ uri: item.image }}
								style={{ height: 100, width: 150 }}
							/>
						</View>
					))}
			</ScrollView>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-around",
					margin: 12,
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate("Shop")}>
					<Text>SEGUIR COMPRANDO</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>FINALIZAR COMPRA</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({});
