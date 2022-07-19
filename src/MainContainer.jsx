import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Stack Screens

import HomeStackScreen from "./stackScreens/HomeStackScreen";
import LogInStackScreen from "./stackScreens/LogInStackScreen";
import ShopStackScreen from "./stackScreens/ShopStackScreen";

// //Screen names

const Tab = createBottomTabNavigator();

const MainContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getData();
		//eslint-disable-next-line
	}, []);

	const getData = async () => {
		try {
			const token = await AsyncStorage.getItem("token");
			if (token !== null) {
				dispatch(usersActions.verifyToken(token));
			}
		} catch (error) {
			console.log(error);
		}
	};

	// const user = useSelector((store) => store.usersReducer.user);
	// console.log(user);

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={"DAFTLAB"}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let routeName = route.name;

						if (routeName === "DAFTLAB") {
							iconName = focused ? "home" : "home-outline";
						} else if (routeName === "MyShop") {
							// iconName = focused ? "cart" : "cart-outline";
							iconName = focused ? "cart" : "cart-outline";
						} else if (routeName === "MyAccount") {
							iconName = focused ? "person" : "person-outline";
						} else if (routeName === itinerariesName) {
							iconName = focused ? "reader" : "reader-outline";
						}

						return (
							<Ionicons name={iconName} size={25} color={"#30475E"} />
						);
					},
					tabBarActiveTintColor: "#F05454",
					tabBarInactiveTintColor: "#F05454",
				})}
			>
				<Tab.Screen
					name={"DAFTLAB"}
					options={{ headerShown: false }}
					component={HomeStackScreen}
				/>
				<Tab.Screen
					name={"MyShop"}
					component={ShopStackScreen}
					options={{ headerShown: false }}

					// options={{ tab }}
				/>
				{/* <Tab.Screen name={itinerariesName} component={ItinerariesScreen} /> */}
				<Tab.Screen
					name={"MyAccount"}
					options={{ headerShown: false }}
					component={LogInStackScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainContainer;
