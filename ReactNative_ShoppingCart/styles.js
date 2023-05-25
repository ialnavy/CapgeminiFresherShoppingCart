import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover'
    }, container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }, label: {
        fontSize: 18,
        marginBottom: 10
    }, input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 15
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline'
    }, subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    }, description: {
        fontSize: 16,
        marginTop: 10
    }, category: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 10
    }, buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }, total: {
        fontSize: 18,
        marginBottom: 10
    }, price: {
        fontSize: 18,
        color: '#ff0000',
        marginTop: 10,
        marginBottom: 20
    }, shipping: {
        fontSize: 18,
        marginBottom: 20,
        color: 'green'
    }, product: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }, image: {
        width: '100%',
        height: 200,
    }, productImage: {
        width: 50,
        height: 50,
        marginRight: 10
    }, productText: {
        fontSize: 18
    }
});

export default styles;
