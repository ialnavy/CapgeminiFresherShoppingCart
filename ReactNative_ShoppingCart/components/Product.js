import React from 'react';
import styles from '../styles';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Product({ product, addToCart }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Categoría: {product.category}</Text>
      <Text style={styles.price}>Precio: {product.price}$</Text>
      <Button  style={styles.button} title="Agregar al carro" onPress={() => addToCart(product)} />
    </View>
  );
}