import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const AsicsScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const [asics, setAsics] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setAsics(res.data.response)
		);
	}, []);

	return (
		<View>
			{asics &&
				asics.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default AsicsScreen;

const styles = StyleSheet.create({});
