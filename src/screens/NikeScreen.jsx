import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";
import { useState, useEffect } from "react";

const NikeScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [nike, setNike] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setNike(res.data.response)
		);
	}, []);

	return (
		<View>
			{nike &&
				nike.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default NikeScreen;

const styles = StyleSheet.create({});
