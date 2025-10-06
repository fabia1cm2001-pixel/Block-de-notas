import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { screens } from "../utils";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.tab.root} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}