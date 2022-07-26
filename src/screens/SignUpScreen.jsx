import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const image = {
	uri: "https://images-ext-2.discordapp.net/external/bJCh4XXzByjWVzvWBJstjmZJ_4D1qbBHvq5qVzBNFGk/http/imgfz.com/i/6VSyuvZ.png",
};

const SignUpScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [userName, setUserName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");

	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(name) => setUserName(name)}
					value={userName}
					placeholder="First Name"
					keyboardType="default"
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "black",
					}}
				/>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(lastName) => setUserLastName(lastName)}
					value={userLastName}
					placeholder="Last Name"
					keyboardType="default"
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "black",
					}}
				/>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(email) => setEmail(email)}
					value={email}
					placeholder="Email"
					keyboardType="default"
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "black",
					}}
				/>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(password) => setPassword(password)}
					value={password}
					placeholder="Password"
					keyboardType="default"
					secureTextEntry
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "black",
					}}
				/>
				<TextInput
					// style={stylesInput.input}
					onChangeText={(photoUrl) => setPhotoUrl(photoUrl)}
					value={photoUrl}
					placeholder="Photo URL"
					keyboardType="default"
					secureTextEntry
					style={{
						backgroundColor: "white",
						padding: 10,
						margin: 20,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: "black",
					}}
				/>
				<TouchableOpacity
					style={{
						// justifyContent: "center",
						alignItems: "center",
						borderRadius: 20,
						backgroundColor: "red",
						marginHorizontal: 150,
						backgroundColor: "#64c5f0",
						padding: 10,
					}}
				>
					<Text
						onPress={() => {
							// handleSubmit();
							navigation.navigate("Log In");
						}}
						style={{
							textAlign: "center",
							color: "#f5f5f5",
						}}
					>
						SUBMIT
					</Text>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: "white",
						flexDirection: "row",
						justifyContent: "center",
						marginHorizontal: 50,
						alignItems: "center",
						marginTop: 20,
						borderRadius: 34,
					}}
				>
					<Text>Alredy a user? </Text>
					<Text
						onPress={() => {
							navigation.navigate("Log In");
						}}
						style={{
							// textAlign: "center",
							padding: 5,
							color: "#64c5f0",
						}}
					>
						Log in
					</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0",
	},
	button: {
		borderRadius: 20,
	},
});
