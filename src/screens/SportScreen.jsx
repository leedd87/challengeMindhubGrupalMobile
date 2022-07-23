import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import typeShoesActions from "../../redux/actions/typeShoesActions";
import shoesActions from "../../redux/actions/shoesActions";

const SportScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [sportShoes, setSportShoes] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByType(id)).then((res) =>
			setSportShoes(res.data.response)
		);
	}, []);
	return (
		<View>
			{sportShoes &&
				sportShoes.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default SportScreen;

const styles = StyleSheet.create({});
