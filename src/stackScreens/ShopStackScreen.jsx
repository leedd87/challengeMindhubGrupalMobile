import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailScreen from "../screens/DetailScreen";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";

const ShopStack = createNativeStackNavigator();
const ShopStackScreen = () => {
	return (
		<ShopStack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "black" },
				headerTintColor: "white",
			}}
		>
			<ShopStack.Screen name="Shop" component={ShopScreen} />
			<ShopStack.Screen name="Detail" component={DetailScreen} />
			<ShopStack.Screen name="Cart" component={CartScreen} />
		</ShopStack.Navigator>
	);
};

export default ShopStackScreen;

// const styles = StyleSheet.create({});
