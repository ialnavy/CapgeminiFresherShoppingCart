import React from 'react';
import { View, Text, ImageBackground, Button, FlatList, StyleSheet } from 'react-native';

export default function ShoppingCart({ cart, clearCart }) {
  // Calcula el total del carrito
  const total = cart.reduce((sum, product) => sum + Number(product.price), 0);

  return (
    <ImageBackground source={{uri: 'url-de-la-imagen-de-fondo'}} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Tu carrito</Text>
        <Text style={styles.total}>Total: {total} euros</Text>
        <Text style={styles.shipping}>Envío gratis!</Text>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <ImageBackground source={{uri: item.image}} style={styles.productImage} />
              <Text style={styles.productText}>{item.name} - {item.price} euros</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button title="Comprar" onPress={() => {/* Realiza el proceso de compra */}} />
        <Button title="Vaciar" onPress={clearCart} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    marginBottom: 10,
  },
  shipping: {
    fontSize: 18,
    marginBottom: 20,
    color: 'green',
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productText: {
    fontSize: 18,
  },
});
