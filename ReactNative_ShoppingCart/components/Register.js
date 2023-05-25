import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import UserService from "../service/UserService";
import styles from "../styles";

function Register({ navigation }) {
  const [userFields, setUserFields] = useState({
    username: "",
    password: "",
    email: "",
  });

  const registerUser = async () => {
    if (!(await UserService.doRegister(userFields))) {
      Alert.alert(
        "Error",
        "O bien no se ha rellenado algún campo, o bien ya existe un usuario con ese nombre de usuario"
      );
      return;
    }
    setUserFields({ username: "", password: "", email: "" });
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setUserFields({ ...userFields, email: text });
        }}
        value={userFields.email}
      />

      <Text style={styles.label}>Nombre de usuario</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setUserFields({ ...userFields, username: text });
        }}
        value={userFields.username}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setUserFields({ ...userFields, password: text });
        }}
        value={userFields.password}
        secureTextEntry={true}
      />

      <Button title="Registrarse" onPress={registerUser} />
      <Button
        title="Ir al inicio de sesión"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

export default Register;
