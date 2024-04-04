import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignIn({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.replace('Root');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar hidden />

        <View style={styles.main}>
          <Image
            style={styles.mylogo}
            source={require("./assets/Logo-02.jpg")}
          />
        </View>

        <View style={styles.mainInput}>
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

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>Register Here</Text>
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
    width: 200,
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
  loginButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 90,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  registerButton: {
    padding: 10,
    
  },
  registerText:{
    color: "#757474",
    fontWeight: "bold",
  }
});
