import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View,Image, Alert,TouchableOpacity,StatusBar } from 'react-native'
import React, { useState } from 'react'
import *as imagepicker from 'expo-image-picker';
import { Link, Stack } from 'expo-router'


const Home = () => {

    const [SelectedImage,setSelectedImage] = useState("");
    async function Pickimage()
    {
        const {status}=await imagepicker.requestMediaLibraryPermissionsAsync();

        if(status!='granted')
        {
            Alert.alert('allow permiison for Accsseing photos');
        }
        let result=await imagepicker.launchImageLibraryAsync({
            mediaTypes:imagepicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        })

        if(!result.canceled)
            {
                setSelectedImage(result.assets[0].uri);
            }
        
    }
     
  return (
    <>
        <Stack.Screen options={{headerShown:false}}/>
        <StatusBar  backgroundColor="#77bba2"/>
        <ImageBackground source={require("@/assets/images/Appbg.png")}
        style={styles.Background}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    {SelectedImage &&<Image source={{uri:SelectedImage}} style={styles.image} />}
                </View>
                <View style={styles.ButtonContainer} >
                    <TouchableOpacity style={styles.Button} onPress={Pickimage}><Text style={styles.ButtonText}>UPLOAD PHOTO</Text></TouchableOpacity>
                </View> 
                <Link href="/output">oUTPUT PAGE</Link>
            </View>
            
        </ScrollView>

        </ImageBackground>

    </>
  )
}

export default Home

const styles = StyleSheet.create({
    Background: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      },
      container:{
        margin:10,
        flex:1,
        gap:40,
      },
      imageContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      },
      ButtonContainer:{
          marginTop:70,
          fontSize:24,
          padding:20,
          alignItems:"center",
          justifyContent:"center",
      },
      Button:{
        borderWidth:1,
        padding :20,
        paddingLeft:70,
        paddingRight:70,
        marginLeft:12,
        backgroundColor:"black",
        borderRadius:30,
      },
      ButtonText:{
        fontSize:15,
        color:"white",
        fontWeight:"bold",

      }
})