import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadUsuario from './src/screens/CadUsuário';
import CadEnd from './src/screens/CadEnd';
import Confirmacao from './src/screens/Confirmacao';
import Home from './src/screens/Home';
import SolicitarScreen from './src/screens/SolicitarScreen';
import PedidosScreen from './src/screens/PedidosScreen';
import MotoristasScreen from './src/screens/MotoristasScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade', }}>

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadUsuario" component={CadUsuario} />
        <Stack.Screen name="CadEnd" component={CadEnd} />
        <Stack.Screen name="Confirmacao" component={Confirmacao} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SolicitarScreen" component={SolicitarScreen} />
        <Stack.Screen name="PedidosScreen" component={PedidosScreen} />
        <Stack.Screen name="MotoristasScreen" component={MotoristasScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
