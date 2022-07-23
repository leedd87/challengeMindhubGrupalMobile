import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import shoesActions from "../../redux/actions/shoesActions";

const JordanScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [jordan, setJordan] = useState();
	const { id } = route.params;

	useEffect(() => {
		dispatch(shoesActions.getShoesByBrand(id)).then((res) =>
			setJordan(res.data.response)
		);
	}, []);

	return (
		<View>
			{jordan &&
				jordan.map((item, index) => (
					<View key={index}>
						<Text>{item.name}</Text>
					</View>
				))}
		</View>
	);
};

export default JordanScreen;

const styles = StyleSheet.create({});
