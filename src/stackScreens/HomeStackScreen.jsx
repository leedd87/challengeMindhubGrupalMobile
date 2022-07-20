import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Shop" component={ShopScreen} />
			<HomeStack.Screen name="Cart" component={CartScreen} />
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;

// const styles = StyleSheet.create({});
