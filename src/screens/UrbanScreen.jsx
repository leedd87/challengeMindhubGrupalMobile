import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const UrbanScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [urbanShoes, setUrbanShoes] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByType(id)).then((res) =>
			setUrbanShoes(res.data.response)
		);
	}, []);

	return (
		<View>
			{urbanShoes &&
				urbanShoes.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default UrbanScreen;

const styles = StyleSheet.create({});
