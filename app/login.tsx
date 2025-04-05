import { ImageBackground, ScrollView, StyleSheet, Text, View,TextInput,Button,StatusBar } from 'react-native'
import {Stack,Link,useRouter} from 'expo-router'
import React from 'react'
import { navigate } from 'expo-router/build/global-state/routing'

const Login = () => {
  const router=useRouter();
  function nav(){
       router.push('/Home')
  }
  
  return (

    <>
    <Stack.Screen options={{headerShown:false}} />
    <StatusBar  backgroundColor="#77bba2"/>
    <ImageBackground
            source={require("@/assets/images/Appbg.png")}
              style={styles.Background}
            
          >
    <ScrollView>

    {/*Logo design is here */ }
    <View  style={styles.conatiner} >
      <View>
        <Text>Logo</Text>
      </View>

      {/* login page work in here  */}
      <View style={styles.Login}>
        <Text style={{fontSize:40,textAlign:"center"}}>Login</Text>
        <TextInput placeholder=' Enter Your UserName'  style={styles.input}  /> 
        <TextInput placeholder='Enter Your Password' style={styles.input}/>
        <Button color={"black"} title="Login" onPress={nav}/>

        {/*Fogot passwrod link is here*/}
       
        {/* Singup page Navigation lonk is here  */}
        <View style={{flex:1,justifyContent:"center",gap:10}}>
          <Link href="pass." style={{color:"blue",textDecorationLine:"underline",fontSize:17,textAlign:"center"}}><Text>Forgot Password?</Text></Link>
          <Text style={{ fontSize:17}} >New User? </Text>
           <Link href="/">
              <Text style={{ color: "blue", textDecorationLine: "underline",fontSize:17, }}>SignUp</Text>
            </Link>
        </View>

      </View>
    </View>
    </ScrollView>
    </ImageBackground>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  Background: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  conatiner:{
    flex:1,
    flexDirection:"column",
    gap:220,
    margin:20,
  },
  Login:{
    flex:1,
    flexDirection:"column",
    gap:24,
    
  },
  input:{
    borderRadius:10,
    padding:16,
    backgroundColor:"#77bba2",


  }

})