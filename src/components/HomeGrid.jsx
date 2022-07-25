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

const height = Dimensions.get("window").height;
const nikeShoesOne =
	"https://images-ext-1.discordapp.net/external/Vq4iUvDILaxPTUGwk9vfFeEoasA1P0GQD_8WbTZdbeI/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80/https/images.unsplash.com/photo-1568391603099-482cb961cfa5";
const nikeShoesTwo =
	"https://images-ext-1.discordapp.net/external/Zb2UzYJnCsiO9yzwd2K_uwaS0D8qTt4ziNHBXWY_piE/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1631%26q%3D80/https/images.unsplash.com/photo-1508125673219-7cec6bc90159";

const newBalanceOne =
	"https://images-ext-2.discordapp.net/external/us3f_6cRwWCcBo1jk9V-QqyGoqzqRx5upG711sXUo0M/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1168%26q%3D80/https/images.unsplash.com/photo-1610630879511-3f6a23c19a02";

const newBalanceTwo =
	"https://images-ext-1.discordapp.net/external/LYYTkRf_9pcmdZ0ZLn-H5_EmvYwZD2J27p25vkl7TKA/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1179%26q%3D80/https/images.unsplash.com/photo-1595341888016-a392ef81b7de";

const nikeShoesThree = "https://cdn.wallpapersafari.com/59/37/ISGr2l.jpg";

const nikeShoesFour =
	"https://images-ext-1.discordapp.net/external/R9-US3eoOrxD6BnK2jArbRejnmf5FMkUeQlWB_kcpIQ/%3Ffit%3D1937%252C1090%26ssl%3D1/https/i0.wp.com/prettyphresh.com/wp-content/uploads/2021/11/A-Ma-Maniere-x-Air-Jordan-1-Receives-Confirmed-Release-Date-Campaign-Photos-Inside-cover.jpg?width=1635&height=920";

const nikeShoesFive =
	"https://images-ext-2.discordapp.net/external/OyTliHBMpPU4IxZWwmU4cQ8pHcb7F2NndRDCN_8M4E0/%3Fauto%3Dcompress%2Cformat%26q%3D60%26w%3D1920%26h%3D947/https/creativereview.imgix.net/content/uploads/2022/03/HP-Desktop.jpg?width=1864&height=920";

const nikeShoesSix =
	"https://images-ext-1.discordapp.net/external/2CN4kIzHD9Q_wIwvOk0T4-PCtAmBJb1Ttq0gqTcnW8A/https/www.theridernews.com/wp-content/uploads/2022/04/DSC05208-780x470.jpg";

const nikeShoesSeven =
	"https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80";

const HomeGrid = () => {
	return (
		<ScrollView>
			<View style={{ flexDirection: "row" }}>
				<View
					style={{
						width: "60%",
						height: 200,
						marginRight: 10,
					}}
				>
					<ImageBackground
						source={{ uri: nikeShoesTwo }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground>
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
			<View style={{ width: "100%", height: 180, backgroundColor: "blue" }}>
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
				<View style={{ width: "70%", height: 200 }}>
					<ImageBackground
						source={{ uri: nikeShoesFour }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground>
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
						source={{ uri: nikeShoesSix }}
						resizeMode="cover"
						style={{ flex: 1 }}
					></ImageBackground>
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeGrid;
