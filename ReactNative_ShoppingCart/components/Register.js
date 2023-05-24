import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import UserService from '../service/UserService';
import styles from '../styles';

function Register({navigation}) {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });

    const registerUser = async () => {
        if (!(await UserService.doRegister(user))) {
            Alert.alert('Error', 'O bien no se ha rellenado algún campo, o bien ya existe un usuario con ese nombre de usuario');
            return;
        }
        setUser({ username: '', password: '', email: '' });
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} onChangeText = {text => { setUser({ ...user, email: text }); } } value = {user.email} />

            <Text style={styles.label}>Nombre de usuario</Text>
            <TextInput style={styles.input} onChangeText = {text => { setUser({ ...user, username: text }); } } value = {user.username} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} onChangeText = {text => { setUser({ ...user, password: text }); } } value = {user.password} secureTextEntry={true} />

            <Button title="Registrarse" onPress={registerUser} />
            <Button title="Ir al inicio de sesión" onPress = { () => { navigation.navigate("Login"); } } />
        </View>
    );
}

export default Register;
