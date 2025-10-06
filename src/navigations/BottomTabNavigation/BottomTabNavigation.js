import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NotesNavigation, HistoryNavigation, SettingsNavigation } from "../stacks";
import { screens } from "../../utils";
import { styles } from "./BottomTabNavigation.styles";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#94a3b8",
        tabBarActiveTintColor: "#3b82f6",
        tabBarIcon: ({ color, size }) => screenIcon(route, color, size),
      })}
    >
      <Tab.Screen name={screens.tab.notes.root} component={NotesNavigation} options={{ title: "Notas" }} />
      <Tab.Screen name={screens.tab.history.root} component={HistoryNavigation} options={{ title: "Historial" }} />
      <Tab.Screen name={screens.tab.settings.root} component={SettingsNavigation} options={{ title: "Ajustes" }} />
    </Tab.Navigator>
  );
}

function screenIcon(route, color, size) {
  let iconName;

  if (route.name === screens.tab.notes.root) {
    iconName = "note-text";
  }
  if (route.name === screens.tab.history.root) {
    iconName = "history";
  }
  if (route.name === screens.tab.settings.root) {
    iconName = "cog-outline";
  }

  return (
    <Icon as={MaterialCommunityIcons} name={iconName} size={size} color={color} />
  );
}