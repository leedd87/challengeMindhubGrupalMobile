import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

const Types = ({ navigation }) => {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Nike")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/l3trFed3_CyIQc61n39ltvGgw0pmlpsczRCPh8tn3x0/https/thesneakershopgp.com/media/catalog/category/ADIDAS_136x136.jpg",
					}}
					style={{ width: 45, height: 45 }}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Adidas")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/IECGFE8rfYH1-r2Mdej1WAOvydiZ7H1lCgaLIQkh3s4/https/thesneakershopgp.com/media/catalog/category/ASICS_136x136_2_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("NewBalance")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/qbB-1Edz9uhf6Ajejlz7eGIf3IsuTkoySpvwXl8UA-o/https/thesneakershopgp.com/media/catalog/category/converse_136x136_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Jordan")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/6GULaCCeND6uokwH-uS9RVqILfNDYE5XWGZCCPp57QA/https/thesneakershopgp.com/media/catalog/category/CROCS_logo_136x136.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Asics")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/eJnhasJKkWVWICXrK-3p-H_4CF0ndbKbKmkrJQrX048/https/thesneakershopgp.com/media/catalog/category/FILA_136x136_2.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Balenciaga")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/8W_yuVuOBBGI3Y3Csr9paX63bGdna9lj_uuEDnF25Uk/https/thesneakershopgp.com/media/catalog/category/new_balance_136X136.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Dior")}
			>
				<Image
					source={{
						uri: "https://images-ext-2.discordapp.net/external/lkfK53jCf4gDvEea4qnjYu2kcNBidKmPQFmB_b93obE/https/thesneakershopgp.com/media/catalog/category/NIKE_136x136_2_1_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Louis")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/1CasSQDdgGeTvKjrkfbxSFxfbtBoDe6lP-1W-LVAos4/https/thesneakershopgp.com/media/catalog/category/PUMA_136X136.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Fancy")}
			>
				<Image
					source={{
						uri: "https://images-ext-1.discordapp.net/external/QSb_S3zTRglz79_un8wFZ7z2j8egFbSdQt38xVKvXTg/https/thesneakershopgp.com/media/catalog/category/reebok_logo_136x136_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Urban")}
			>
				<Image
					source={{
						uri: "https://images-ext-2.discordapp.net/external/RJlQpDdyS_NZ948c2Uapy4165j5GNqRU8nOnCyw2nH8/https/thesneakershopgp.com/media/catalog/category/Timberland_136x136_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.typeContainer}
				onPress={() => navigation.navigate("Sport")}
			>
				<Image
					source={{
						uri: "https://images-ext-2.discordapp.net/external/fPWWLzh0MqXcPvA2pUah881mFxFt9ND3p1fjZrpv6pg/https/thesneakershopgp.com/media/catalog/category/Vans_136X136_1_.jpg",
					}}
					style={{ width: 45, height: 45 }}
				></Image>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default Types;

const styles = StyleSheet.create({
	typeContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		margin: 8,
		padding: 10,
		width: 55,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
