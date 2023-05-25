import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const registerUser = () => {
    if (password.length < 6 || username.length < 5) {
      Alert.alert('Error', 'Las credenciales no cumplen los requisitos mínimos');
      return;
    }
    // Registrar al usuario en backend

    // Si el registro es exitoso, navega a la página de inicio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID</Text>
      <TextInput style={styles.input} onChangeText={text => setId(text)} value={id} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} onChangeText={text => setEmail(text)} value={email} />
      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput style={styles.input} onChangeText={text => setUsername(text)} value={username} />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput style={styles.input} onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} />
      <Button title="Registrarse" onPress={registerUser} />
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
