import { ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import { Stack, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    const data = {
      name: Name,
      password: Password,
    };

    // URL/LOGIN
    try {

      // uncomment while connecting backend .... for local i commented it 

      // URL/LOGIN
      //const response = await axios.post("URL/login", data); 

      if(Name==="test" && Password==="123")
      {
        router.push("/Home");
      }

      // remove the above two lines after connecting used for testing purpose

      if (response.data.status === 200) {
        router.push("/Home");
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.log("Login failed:", error);
      setMessage("Failed, please try again");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar backgroundColor="#77bba2" />
      <ImageBackground
        source={require("@/assets/images/Appbg.png")}
        style={styles.Background}
      >
        <ScrollView>
          <View style={styles.conatiner}>
            {/* Logo */}
            <View>
              <Text>Logo</Text>
            </View>

            {/* Login form */}
            <View style={styles.Login}>
              <Text style={{ fontSize: 40, textAlign: "center" }}>Login</Text>

              <TextInput
                value={Name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter Your UserName"
                style={styles.input}
              />

              <TextInput
                value={Password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter Your Password"
                secureTextEntry
                style={styles.input}
              />

              <Button color="black" title="Login" onPress={handleLogin} />

              {/* Display message */}
              {message !== '' && (
                <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>{message}</Text>
              )}

              {/* Forgot Password */}
              <Link href=" ">
                <Text style={styles.linkText}>Forgot Password?</Text>
              </Link>

              {/* New User and SignUp in one line */}
              <View style={styles.row}>
                <Text style={styles.text}>New User? </Text>
                <Link href="/">
                  <Text style={styles.signupLink}>SignUp</Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  Background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  conatiner: {
    flex: 1,
    flexDirection: "column",
    gap: 220,
    margin: 20,
  },
  Login: {
    flex: 1,
    flexDirection: "column",
    gap: 24,
  },
  input: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#77bba2",
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 17,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 17,
  },
  signupLink: {
    color: "blue",
    fontSize: 17,
    textDecorationLine: "underline",
  },
});
