import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
	ScrollView,
	ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";

const nikeShoesOne =
	"https://www.highsnobiety.com/static-assets/thumbor/7cHrLWs3XKIBdM6VxXWbvcqx2V8=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/11/06165748/the-10-most-expensive-sneakers-ever-sold-12.jpg";
const nikeShoesTwo =
	"https://external-preview.redd.it/h0NQndlvR2IxgavrlByoUX96Af1jOcWBQJYxfNVe00g.jpg?auto=webp&s=5cc6b13f535f4084f61fb16451c0837a0a7bbdda";

const newBalanceOne =
	"https://bcchspatriotpost.com/wp-content/uploads/2019/04/F1-900x506.jpg";

const newBalanceTwo =
	"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/scbl5pmzs3ewac4u1cxw/air-jordan-4-1";

const nikeShoesThree =
	"https://cdn.sanity.io/images/c1chvb1i/production/e5334eedeb691b18a5f28a2a96517bb792f9b17f-1100x735.jpg";

const nikeShoesFour =
	"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/uj9phqfjnlsu1mq2ruwk/air-jordan-1-1985?fimg-ssr-default";

const nikeShoesFive =
	"https://media.revistagq.com/photos/62860b8e1f8d21740a7cbdea/master/w_1600%2Cc_limit/louis-vuitton-nike-air-force-1-virgil-abloh.jpeg";

const nikeShoesSix =
	"https://cdn.sanity.io/images/c1chvb1i/production/e5334eedeb691b18a5f28a2a96517bb792f9b17f-1100x735.jpg";

const nikeShoesSeven =
	"https://90snkrs.com/es/wp-content/uploads/sites/3/2021/05/FLIGHT-CLUB-LA.jpg";

const AboutUsScreen = () => {
	const [loaded] = useFonts({
		Poppins: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				// decelerationRate={0.5}
				style={{ height: "90%" }}
				bounces={false}
			>
				<View style={{ flexDirection: "row" }}>
					<View
						style={{
							width: "60%",
							height: 200,
							marginRight: 10,
							justifyContent: "center",
							backgroundColor: "black",
						}}
					>
						{/* <ImageBackground
						source={{ uri: nikeShoesTwo }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground> */}
						<Text
							style={{
								margin: 12,
								color: "white",
								fontSize: 14,
								fontFamily: "Poppins",
							}}
						>
							DAFTLAB is an American retailer of athletic footwear. It is
							a national company, which was founded in 2019. DAFTLAB has
							around 100 stores in operation worldwide and it is
							headquartered in New York City, United States.
						</Text>
					</View>
					<View style={{ width: "40%", height: 200 }}>
						<ImageBackground
							source={{ uri: nikeShoesOne }}
							resizeMode="cover"
							style={{ flex: 1 }}
						></ImageBackground>
					</View>
				</View>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<View
						style={{
							width: "50%",
							height: 200,
						}}
					>
						<ImageBackground
							source={{ uri: newBalanceOne }}
							resizeMode="cover"
							style={{ flex: 1, marginRight: 10 }}
						></ImageBackground>
					</View>
					<View style={{ width: "50%", height: 200 }}>
						<ImageBackground
							source={{ uri: newBalanceTwo }}
							resizeMode="cover"
							style={{ flex: 1 }}
						></ImageBackground>
					</View>
				</View>
				<View
					style={{ width: "100%", height: 180, backgroundColor: "blue" }}
				>
					<ImageBackground
						source={{ uri: nikeShoesThree }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground>
				</View>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<View
						style={{
							width: "30%",
							height: 200,
						}}
					>
						<ImageBackground
							source={{ uri: nikeShoesSeven }}
							resizeMode="cover"
							style={{ flex: 1, marginRight: 10 }}
						></ImageBackground>
					</View>
					<View
						style={{
							width: "70%",
							height: 200,
							backgroundColor: "black",
							paddingLeft: 10,
							justifyContent: "center",
						}}
					>
						{/* <ImageBackground
						source={{ uri: nikeShoesFour }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground> */}
						<Text
							style={{
								margin: 12,
								color: "white",
								fontSize: 16,
								fontFamily: "Poppins",
							}}
						>
							Why buy in our stores?
						</Text>
						<Text
							style={{
								margin: 12,
								color: "white",
								fontSize: 14,
								fontFamily: "Poppins",
							}}
						>
							DAFTLAB inspects every pair to make sure whatever the buyer
							receives is 100% authentic.
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<View
						style={{
							width: "60%",
							height: 200,
						}}
					>
						<ImageBackground
							source={{ uri: nikeShoesFive }}
							resizeMode="cover"
							style={{ flex: 1, marginRight: 10 }}
						></ImageBackground>
					</View>
					<View style={{ width: "40%", height: 200 }}>
						<ImageBackground
							source={{
								uri: "https://media.gq.com/photos/60d2192a430ae505071c3804/master/w_2571,h_3600,c_limit/SNEAKER_GUIDE_JORDANS_1.jpg",
							}}
							resizeMode="cover"
							style={{ flex: 1 }}
						></ImageBackground>
					</View>
				</View>
			</ScrollView>
			<View
				style={{
					height: "10%",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<TouchableOpacity style={styles.typeContainer}>
					<Image
						source={{
							uri: "https://allbike.com.ar/wp-content/uploads/2022/01/kuder-mercadopago-blanco-negro.png",
						}}
						style={{ width: 30, height: 30 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeContainer}>
					<Image
						source={{
							uri: "https://images.squarespace-cdn.com/content/v1/5e7218f0d6425741be5a9df9/1589548860801-DGSUZZOECOJY092S5C9P/logos_zahlungsarten_paypal.png",
						}}
						style={{ width: 40, height: 40 }}
					></Image>
				</TouchableOpacity>

				<TouchableOpacity style={styles.typeContainer}>
					<Image
						source={{
							uri: "https://cdn-icons-png.flaticon.com/512/61/61555.png",
						}}
						style={{ width: 40, height: 40 }}
					></Image>
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeContainer}>
					<Image
						source={{
							uri: "https://icon-library.com/images/mastercard-icon/mastercard-icon-10.jpg",
						}}
						style={{ width: 40, height: 40 }}
					></Image>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AboutUsScreen;

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
