import { useContext } from 'react';
import { View, Text, ImageBackground, Button, FlatList } from 'react-native';
import styles from '../styles';

import AppContext from '../AppContext';

function ShoppingCart({navigation}) {
    const appContext = useContext(AppContext);
    const total = appContext.shoppingCart.reduce((sum, product) => sum + Number(product.price), 0);

    return (
        <ImageBackground source={{uri: 'url-de-la-imagen-de-fondo'}} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Tu carrito</Text>
                <Text style={styles.total}>Total: {total} €</Text>
                <Text style={styles.shipping}>¡Envío gratis!</Text>
                <FlatList data={appContext.shoppingCart} keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.product}>
                            <ImageBackground source={{uri: item.image}} style={styles.productImage} />
                            <Text style={styles.productText}>{item.name} - {item.price} euros</Text>
                        </View> )}
                />
                <Button title="Comprar" onPress={() => {/* TODO: Realiza el proceso de compra */}} />
                <Button title="Vaciar" onPress={ () => { appContext.setShoppingCart([]); } } />
            </View>
        </ImageBackground>
    );
}

export default ShoppingCart;
