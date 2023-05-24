import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            <Stack.Screen name="Product" component={Product} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

export default App;
