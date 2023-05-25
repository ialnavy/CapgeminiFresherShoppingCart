import { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import styles from '../styles';

import AppContext from '../AppContext';

function Product({navigation, product}) {
    const appContext = useContext(AppContext);

    const addToCart = (product) => {
        appContext.setShoppingCart(currentCart => [...currentCart, product]);
    };

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

export default Product;
