import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    if(username === 'Dummy123' && password === '123Dummy321') {
      Alert.alert('¡Exito!', 'Has iniciado sesión correctamente');
      navigation.navigate("Home");
    } else {
      Alert.alert('Error', 'Las credenciales son incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput style={styles.input} onChangeText={text => setUsername(text)} value={username} />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.input} onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} />
      <Button title="Iniciar sesión" onPress={loginUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 15,
  },
});
