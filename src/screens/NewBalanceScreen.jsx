import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const NewBalanceScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [newBalance, setNewBalance] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setNewBalance(res.data.response)
		);
	}, []);

	return (
		<View>
			{newBalance &&
				newBalance.map((item, index) => {
					return (
						<View key={index}>
							<Text>{item.name}</Text>
						</View>
					);
				})}
		</View>
	);
};

export default NewBalanceScreen;

const styles = StyleSheet.create({});
