import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const DiorScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const [dior, setDior] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setDior(res.data.response)
		);
	}, []);

	return (
		<View>
			{dior &&
				dior.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default DiorScreen;

const styles = StyleSheet.create({});
