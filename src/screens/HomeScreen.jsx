import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Dimensions,
	ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Types from "../components/Types";
import { LinearGradient } from "expo-linear-gradient";
import HomeGrid from "../components/HomeGrid";
import Brands from "../components/Brands";
import shoesActions from "../../redux/actions/shoesActions";
import MaskedView from "@react-native-masked-view/masked-view";

const height = Dimensions.get("window").height;

const adidasShoes =
	"http://imgfz.com/i/0paYjzO.png";

const newBalanceShoes =
	"https://reactsport.herokuapp.com/img/productImages/shoe_newbalance_01.png";

const nikeShoes =
	"https://images-ext-1.discordapp.net/external/Tf54CURpuxt3-WEgayMBDLlmilFMpZGV3j343K9--AU/https/i.ibb.co/t8w4YyL/nike.png";
const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(shoesActions.getShoes());
	}, []);

	const shoes = useSelector((store) => store.shoesReducer.shoes);

	return (
		<View>
			<View style={{ height: "37%" }}>
				<View style={styles.container}>
					<MaskedView
						maskElement={
							<Text
								style={{
									fontWeight: "bold",
									justifyContent: "center",
									// marginLeft: 125,
									fontSize: 25,
									backgroundColor: "transparent",
								}}
							>
								Popular Shoes
							</Text>
						}
					>
						<LinearGradient
							colors={["green", "#CFD2CF", "red", "#990000", "blue"]}
							start={{ x: 0.2, y: 0 }}
							end={{ x: 1, y: 1 }}
							style={{ justifyContent: "center" }}
						>
							<Text
								style={{
									fontWeight: "bold",
									textAlign: "center",
									// marginLeft: 125,
									fontSize: 25,
									opacity: 0,
								}}
							>
								Popular Shoes
							</Text>
						</LinearGradient>
					</MaskedView>

					<StatusBar style="auto" />
				</View>
				{/*---------SCROLL-------*/}
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<LinearGradient
						colors={["#9EB23B", "#59f523", "#e0edea"]}
						style={styles.hero}
						start={{ x: 0, y: 0.8 }}
						end={{ x: 1, y: 1 }}
					>
						<Text
							style={{ color: "green", fontSize: 50, marginLeft: 20 }}
						>
							NIKE
						</Text>

						<Image
							source={{ uri: nikeShoes }}
							style={{
								width: 180,
								height: 100,
								transform: [{ rotate: "-30deg" }],
							}}
						/>
					</LinearGradient>
					<LinearGradient
						colors={["#DFDFDE", "#FEFBF6", "#e0edea"]}
						style={styles.hero}
						start={{ x: 0, y: 0.8 }}
						end={{ x: 1, y: 1 }}
					>
						<Text
							style={{
								color: "grey",
								fontSize: 50,
								marginLeft: 20,
							}}
						>
							ADIDAS
						</Text>

						<Image
							source={{ uri: adidasShoes }}
							style={{
								width: 150,
								height: 150,
								transform: [{ rotate: "-35deg" }],
							}}
						/>
					</LinearGradient>
					<LinearGradient
						colors={["#990000", "#F55353", "#e0edea"]}
						style={styles.hero}
						start={{ x: 0, y: 0.8 }}
						end={{ x: 1, y: 1 }}
					>
						<Text
							style={{ color: "#3D0000", fontSize: 50, marginLeft: 20 }}
						>
							NB
						</Text>

						<Image
							source={{ uri: newBalanceShoes }}
							style={{ width: 150, height: 150 }}
						/>
					</LinearGradient>
				</ScrollView>
				{/*---------FIN DE SCROLL-------*/}
				<View>
					<Types navigation={navigation} />
				</View>
			</View>

			<View style={{ height: "56%" }}>
				<HomeGrid />
			</View>
			<View style={{ height: "7%" }}>
				<Brands />
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
	},

	hero: {
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: "blue",
		marginHorizontal: 10,
		borderRadius: 30,
		width: 350, //tamanio contenedor
	},
});
