import { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import UserService from '../service/UserService';
import styles from '../styles';
import AppContext from '../AppContext';

function Login({navigation}) {
    const userContext = useContext(AppContext);
    const [userFields, setUserFields] = useState({
        username: '',
        password: ''
    });

    const loginUser = async () => {
        if (!(await UserService.checkLogin(userFields.username, userFields.password))) {
            Alert.alert('Error', 'Las credenciales son incorrectas');
            return;
        }
        userContext.setUser(await UserService.readByUsername(userFields.username));
        setUserFields({ username: '', password: '' });
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <TextInput style={styles.input} onChangeText = {(text) => { setUserFields({ ...userFields, username: text }); }} value={userFields.username} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} onChangeText = {(text) => { setUserFields({ ...userFields, password: text }); }} value={userFields.password} secureTextEntry={true} />

            <Button title="Iniciar sesión" onPress = {loginUser} />
            <Button title="Ir al registro" onPress = { () => { navigation.navigate("Register"); } } />
        </View>
    );
}

 export default Login;
