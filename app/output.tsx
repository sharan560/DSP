import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const output = () => {
  return (
    <>
    <Stack.Screen options={{headerShown:false}}/>
    <ImageBackground source={require('@/assets/images/Appbg.png')} style={styles.Background}>
      
    </ImageBackground>
    </>
  )
}

export default output

const styles = StyleSheet.create({
  Background:{
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  }
})