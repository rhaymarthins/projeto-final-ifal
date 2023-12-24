// Navegacao.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login/Login.js';
import WeatherAPI from '../WeatherAPI/WeatherAPI.js';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const Stack = createStackNavigator();

const Navegacao = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="WeatherApi" component={WeatherAPI} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navegacao;
