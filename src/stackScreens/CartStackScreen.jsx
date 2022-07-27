import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import CartScreen from "../screens/CartScreen";

const CartStack = createNativeStackNavigator();
const CartStackScreen = () => {
	return (
		<CartStack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "black" },
				headerTintColor: "white",
			}}
		>
			<CartStack.Screen name="Cart" component={CartScreen} />
		</CartStack.Navigator>
	);
};

export default CartStackScreen;

// const styles = StyleSheet.create({});
