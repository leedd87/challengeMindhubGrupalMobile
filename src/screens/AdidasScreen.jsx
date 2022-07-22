import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const AdidasScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [adidas, setAdidas] = useState();
	const { id } = route.params;
	console.log(id);

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setAdidas(res.data.response)
		);
	}, []);

	return (
		<View>
			{adidas &&
				adidas.map((item, index) => {
					return (
						<View key={index}>
							<Text>{item.name}</Text>
						</View>
					);
				})}
		</View>
	);
};

export default AdidasScreen;

const styles = StyleSheet.create({});
