import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import shoesActions from "../redux/actions/shoesActions";

//Stack Screens

import HomeStackScreen from "./stackScreens/HomeStackScreen";
import LogInStackScreen from "./stackScreens/LogInStackScreen";
import ShopStackScreen from "./stackScreens/ShopStackScreen";
import AboutUsStackScreen from "./stackScreens/AboutStackScreen";

// //Screen names

const Tab = createBottomTabNavigator();

const MainContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shoesActions.getShoes());
	}, []);

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
					tabBarIcon: ({ focused, size, color }) => {
						let iconName;
						if (route.name === "DAFTLAB") {
							iconName = "home";
						} else if (route.name === "MyShop") {
							iconName = "store";
						} else if (route.name === "MyAccount") {
							iconName = "user";
						} else if (route.name === "AboutUs") {
							iconName = "info";
						}
						return (
							<FontAwesome5 name={iconName} size={20} color={"red"} />
						);
					},
					tabBarActiveTintColor: "#F05454", //color iconos activado
					tabBarInactiveTintColor: "black", //color iconos desactivado
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
				/>
				<Tab.Screen
					name={"AboutUs"}
					options={{ headerShown: false }}
					component={AboutUsStackScreen}
				/>
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
