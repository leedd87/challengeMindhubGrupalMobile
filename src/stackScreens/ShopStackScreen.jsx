import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";

const ShopStack = createNativeStackNavigator();
const ShopStackScreen = () => {
	return (
		<ShopStack.Navigator>
			<ShopStack.Screen name="Shop" component={ShopScreen} />
		</ShopStack.Navigator>
	);
};

export default ShopStackScreen;

// const styles = StyleSheet.create({});
