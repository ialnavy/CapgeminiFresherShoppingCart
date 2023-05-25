import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
    }, 
    label: {
        fontSize: 18,
        marginBottom: 10
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 15
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 25,
        width: '60%',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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


