import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const Balenciaga = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [balenciaga, setBalenciaga] = useState();
	const { id } = route.params;
	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setBalenciaga(res.data.response)
		);
	}, []);

	return (
		<View>
			{balenciaga &&
				balenciaga.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default Balenciaga;

const styles = StyleSheet.create({});
