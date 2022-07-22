import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ShopScreen from "../screens/ShopScreen";
import AdidasScreen from "../screens/AdidasScreen";
import NikeScreen from "../screens/NikeScreen";
import NewBalanceScreen from "../screens/NewBalanceScreen";
import JordanScreen from "../screens/JordanScreen";
import DiorScreen from "../screens/DiorScreen";
import AsicsScreen from "../screens/AsicsScreen";
import BalenciagaScreen from "../screens/Balenciaga";
import LouisVuittomScreen from "../screens/LouisVuittomScreen";
import FancyScreen from "../screens/FancyScreen";
import UrbanScreen from "../screens/UrbanScreen";
import SportScreen from "../screens/SportScreen";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Shop" component={ShopScreen} />
			<HomeStack.Screen name="Cart" component={CartScreen} />
			<HomeStack.Screen name="Nike" component={NikeScreen} />
			<HomeStack.Screen name="Adidas" component={AdidasScreen} />
			<HomeStack.Screen name="NewBalance" component={NewBalanceScreen} />
			<HomeStack.Screen name="Jordan" component={JordanScreen} />
			<HomeStack.Screen name="Asics" component={AsicsScreen} />
			<HomeStack.Screen name="Balenciaga" component={BalenciagaScreen} />
			<HomeStack.Screen name="Dior" component={DiorScreen} />
			<HomeStack.Screen name="Louis" component={LouisVuittomScreen} />
			<HomeStack.Screen name="Fancy" component={FancyScreen} />
			<HomeStack.Screen name="Urban" component={UrbanScreen} />
			<HomeStack.Screen name="Sport" component={SportScreen} />
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;

// const styles = StyleSheet.create({});
