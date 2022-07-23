import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WishListScreen from "../screens/WishListScreen";

const WishListStack = createNativeStackNavigator();
const WishListStackScreen = () => {
	return (
		<WishListStack.Navigator>
			<WishListStack.Screen name="Wish" component={WishListScreen} />
		</WishListStack.Navigator>
	);
};

export default WishListStackScreen;
