import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

import AppContext from './AppContext';

const Stack = createStackNavigator();

function App() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });
    const [products, setProducts] = useState([]);
    const userContext = {
        user: user,
        setUser: setUser,
        products: products,
        setProducts: setProducts
    };
    return (
        <AppContext.Provider value={userContext}>
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
        </AppContext.Provider>

    );
}

export default App;
