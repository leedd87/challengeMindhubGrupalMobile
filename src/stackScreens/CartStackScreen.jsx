import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailScreen from "../screens/DetailScreen";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";

const CartStack = createNativeStackNavigator();
const CartStackScreen = () => {
	return (
		<CartStack.Navigator>
			<CartStack.Screen name="Cart" component={CartScreen} />
		</CartStack.Navigator>
	);
};

export default CartStackScreen;

// const styles = StyleSheet.create({});
