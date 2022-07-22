import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutUsScreen from "../screens/AboutUsScreen";

const AboutUsStack = createNativeStackNavigator();
const AboutUsStackScreen = () => {
	return (
		<AboutUsStack.Navigator>
			<AboutUsStack.Screen name="About Us" component={AboutUsScreen} />
		</AboutUsStack.Navigator>
	);
};

export default AboutUsStackScreen;
