import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";
import { useState, useEffect } from "react";
const LouisVuittomScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [louis, setLouis] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setLouis(res.data.response)
		);
	}, []);

	return (
		<View>
			{louis &&
				louis.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default LouisVuittomScreen;

const styles = StyleSheet.create({});
