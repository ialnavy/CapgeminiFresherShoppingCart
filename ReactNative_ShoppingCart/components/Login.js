import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import UserService from '../service/UserService';
import styles from '../styles';

function Login({ navigation }) {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const loginUser = async () => {
        if (!(await UserService.checkLogin(user.username, user.password))) {
            Alert.alert('Error', 'Las credenciales son incorrectas');
            return;
        }
        setUser({ username: '', password: '' });
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <TextInput style={styles.input} onChangeText = {(text) => { setUser({ ...user, username: text }); }} value={user.username} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} onChangeText = {(text) => { setUser({ ...user, password: text }); }} value={user.password} secureTextEntry={true} />

            <Button title="Iniciar sesión" onPress = {loginUser} />
            <Button title="Ir al registro" onPress = { () => { navigation.navigate("Register"); } } />
        </View>
    );
}

 export default Login;
