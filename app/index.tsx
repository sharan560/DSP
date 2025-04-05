import { ImageBackground, StyleSheet, Text, TextInput, View, Button, ScrollView, StatusBar } from "react-native";
import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Signup = () => {

  const[Name,setName]=useState('')
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  const[ConfirmPassword,setConfirmPassword]=useState('')
  return (
    <>
    <ImageBackground
        style={styles.Background}
        source={require("@/assets/images/Appbg.png")}
      >
    <ScrollView>
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar  backgroundColor="#77bba2"/>
      
        <View>
          <Text>Logo</Text>
        </View>

        <View style={styles.SignUp}>

          <Text style={{textAlign:"center",fontSize:35}}>SignUp</Text>
          <TextInput value={Name} onChangeText={(text)=>setName(text)} placeholder="Name" style={styles.input} />
          <TextInput value={Email} onChangeText={(text)=>setEmail(text)} placeholder="Email"  style={styles.input} />
          <TextInput value={Password} onChangeText={(text)=>setPassword(text)}placeholder="Password" secureTextEntry style={styles.input} />
          <TextInput value={ConfirmPassword} onChangeText={(text)=>setConfirmPassword(text)}placeholder="Confirm Password" secureTextEntry style={styles.input} />

          <View>
            <Button title="SignUp" color="black" />
          </View>

          <View style={styles.Login}>
            <Text style={{ fontSize:16}}>Already Have An Account? </Text>
            <Link href="/login">
              <Text style={{ color: "blue", textDecorationLine: "underline",fontSize:17 }}>
                Login
              </Text>
            </Link>
          </View>

        </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container:{
    margin:20,
    flex:1,
    flexDirection:"column",
    gap:200,
  },
  Background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  input: {
    marginVertical: 10,
    padding: 16,
    borderRadius:10,
    backgroundColor:"#77bba2",
  },
  Login: {
    flexDirection: "row",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  SignUp:{
    flex:1,
    flexDirection:"column",
    gap:14
  }
});
