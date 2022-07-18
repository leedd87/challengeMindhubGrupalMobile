import { StyleSheet, Text, View } from "react-native";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const SignUpScreen = () => {
	const dispatch = useDispatch();
	const [userName, setUserName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<View>
			<Text>SignUpScreen</Text>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({});
