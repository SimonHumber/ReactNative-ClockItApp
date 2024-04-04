import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <View style={styles.mainInput}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={name}
          />
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={email}
          />
          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={phone}
          />
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    marginTop: 50,
    // backgroundColor: 'pink',
    alignItems: "center",
    justifyContent: "center",
  },
  mylogo: {
    marginTop: 20,
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    width: 250,
    margin: 10,
    borderWidth: 0.8,
    padding: 10,
    borderRadius: 10,
    borderColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#fff",
  },
  mainInput: {
    flex: 1,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 90,
  },
  registerText: {
    textAlign: "center",
    color: "white",
  },
});
