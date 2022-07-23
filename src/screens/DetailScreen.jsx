import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import shoesActions from "../../redux/actions/shoesActions";
import { useState, useEffect } from "react";

const DetailScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [shoe, setShoe] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getOneShoe(id)).then((res) =>
			setShoe(res.data.response)
		);
	}, []);

	console.log(shoe);

	return (
		<View>
			<Text>DetailScreen</Text>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({});
