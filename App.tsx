import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/views/Home";
import theme from "./src/theme/theme";
import Recipe from "./src/views/Recipe";

export default function App() {

    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Accueil" component={Home}/>
          <Stack.Screen name="Recette" component={Recipe}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
