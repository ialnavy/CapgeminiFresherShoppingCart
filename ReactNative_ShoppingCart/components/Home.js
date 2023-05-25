import { useState, useContext, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';

import Product from './Product';
import ShoppingCart from './ShoppingCart'; // Importa el componente ShoppingCart
import AppContext from '../AppContext';

import ProductService from '../service/ProductService';

function Home({navigation}) {
    const appContext = useContext(AppContext);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(currentCart => [...currentCart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const navigateToCart = () => {
        navigation.navigate('ShoppingCart', { cart, clearCart });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {/* Navega al perfil de usuario */}}>
                <Text style={styles.title}>¡Bienvenido a nuestra tienda, {appContext.user.username}!</Text>
            </TouchableOpacity>

            <View style={styles.buttons}>
                <Button title="Categoría 1" onPress={() => {/* Navega a la Categoría 1 */}} />
                <Button title="Categoría 2" onPress={() => {/* Navega a la Categoría 2 */}} />
                <Button title="Carrito de compras" onPress={navigateToCart} />
                <Button title="Cerrar sesión" onPress={() => {/* Cierra la sesión del usuario */}} />
            </View>

            <Text style={styles.subtitle}>Nuestros productos:</Text>
            <FlatList data={appContext.products} keyExtractor={item => item.id}
                renderItem={ ({ item }) => <Product product={item} addToCart={addToCart} /> } />
        </View>
    );
}

export default Home;
