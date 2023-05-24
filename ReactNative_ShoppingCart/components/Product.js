import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Product({ product, addToCart }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Categoría: {product.category}</Text>
      <Text style={styles.price}>Precio: {product.price}$</Text>
      <Button title="Agregar al carro" onPress={() => addToCart(product)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: '#ff0000',
    marginTop: 10,
    marginBottom: 20,
  },
});
