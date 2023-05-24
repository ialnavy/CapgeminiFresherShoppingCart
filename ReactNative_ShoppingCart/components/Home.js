import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Product from './Product';
import ShoppingCart from './ShoppingCart'; // Importa el componente ShoppingCart
import fbDB from '../persistence/firebase';

const productos = [
  // Nota: Cada producto necesita también tener las propiedades image, description, category, y price
  { id: '1', name: 'Producto 1', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 1', price: '100' },
  { id: '2', name: 'Producto 2', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 2', price: '200' },
  { id: '3', name: 'Producto 3', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 3', price: '300' },
  // Agrega más productos aquí
];

function Home({ navigation }) {
  const [cart, setCart] = useState([]);
  const username = 'Dummy123'; // Hardcodea el nombre de usuario

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
        <Text style={styles.title}>¡Bienvenido a nuestra tienda, {username}!</Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <Button title="Categoría 1" onPress={() => {/* Navega a la Categoría 1 */}} />
        <Button title="Categoría 2" onPress={() => {/* Navega a la Categoría 2 */}} />
        <Button title="Carrito de compras" onPress={navigateToCart} />
        <Button title="Cerrar sesión" onPress={() => {/* Cierra la sesión del usuario */}} />
      </View>

      <Text style={styles.subtitle}>Nuestros productos:</Text>
      <FlatList
        data={productos}
        renderItem={({ item }) =>
          <Product
            product={item}
            addToCart={addToCart}
          />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default Home;
