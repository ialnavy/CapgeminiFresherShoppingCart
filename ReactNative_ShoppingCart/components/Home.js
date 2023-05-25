import { useState, useContext, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';

import Product from './Product';
import ShoppingCart from './ShoppingCart'; // Importa el componente ShoppingCart
import AppContext from '../AppContext';

import ProductService from '../service/ProductService';

function Home({navigation}) {
    const appContext = useContext(AppContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {/* Navega al perfil de usuario */}}>
                <Text style={styles.title}>¡Bienvenido a nuestra tienda, {appContext.user.username}!</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                <Button title="Categoría 1" onPress={() => {/* Navega a la Categoría 1 */}} />
                <Button title="Categoría 2" onPress={() => {/* Navega a la Categoría 2 */}} />
                <Button title="Carrito de compras" onPress={ () => { navigation.navigate('ShoppingCart'); } } />
                <Button title="Cerrar sesión" onPress={() => {/* Cierra la sesión del usuario */}} />
            </View>

            <Text style={styles.subtitle}>Nuestros productos:</Text>
            <FlatList data={appContext.products} keyExtractor={item => item.id}
                renderItem={ ({ item }) => <Product product={item} /> } />
        </View>
    );
}

export default Home;
