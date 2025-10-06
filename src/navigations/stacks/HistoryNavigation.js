import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HistoryScreen, SearchScreen } from "../../screens/History";
import { screens } from "../../utils";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export function HistoryNavigation() {
  return (
    <Stack.Navigator screenOptions={{ ...styles?.stackNavigationStyles }}>
      <Stack.Screen name={screens.tab.history.historyScreen} component={HistoryScreen} options={{ title: "Historial" }} />
      <Stack.Screen name={screens.tab.history.searchScreen} component={SearchScreen} options={{ title: "Buscar" }} />
    </Stack.Navigator>
  );
}