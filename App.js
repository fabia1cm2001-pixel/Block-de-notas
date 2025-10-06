import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider/index";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider>
        <NativeBaseProvider>
          <View style={styles.container}>
            <HandlerNavigation />
            <StatusBar style="auto" />
          </View>
        </NativeBaseProvider>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});