import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/views/Home";
import theme from "./src/theme/theme";
import Recipe from "./src/views/Recipe";
import CreerRecette from "./src/views/CreerRecette";
import Profile from "./src/views/Profile";

export default function App() {

    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Accueil" component={Home}/>
          <Stack.Screen name="Recette" component={Recipe}/>
          <Stack.Screen name="CreerRecette" component={CreerRecette}/>
          <Stack.Screen name="Profile" component={Profile}/>
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
