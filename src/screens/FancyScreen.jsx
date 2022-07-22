import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import typeShoesActions from "../../redux/actions/typeShoesActions";
import shoesActions from "../../redux/actions/shoesActions";

const FancyScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [fancyShoes, setFancyShoes] = useState();
	const { id } = route.params;
	console.log(id);

	useEffect(() => {
		dispatch(shoesActions.getShoesByType(id)).then((res) =>
			setFancyShoes(res.data.response)
		);
	}, []);
	return (
		<View>
			{fancyShoes &&
				fancyShoes.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default FancyScreen;

const styles = StyleSheet.create({});
