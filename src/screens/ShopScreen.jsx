import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShopScreen = ({ navigation }) => {
	return (
		<View>
			<Text>ShopScreen</Text>
			<Text
				onPress={() => {
					navigation.navigate("Detail");
				}}
			>
				CLICK ME
			</Text>
		</View>
	);
};

export default ShopScreen;

const styles = StyleSheet.create({});
