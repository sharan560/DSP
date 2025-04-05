import { ImageBackground, StyleSheet, Text, View, Animated, Easing } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Stack } from 'expo-router';

const Output = () => {
  const [data, setData] = useState({
    temp: '',
    water: '',
    ph: '',
    efficiency: '',
    suggestion: '',
  });

  const [loading, setLoading] = useState(true);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        //fetch value 
        const response = await fetch('url/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]} />
        <Text style={styles.loadingText}>Fetching Data...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require('@/assets/images/Appbg1.png')}
        style={styles.Background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardText}>{data.temp}</Text>
              </View>
              <Text style={styles.label}>temp</Text>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardText}>{data.water}</Text>
              </View>
              <Text style={styles.label}>water</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardText}>{data.ph}</Text>
              </View>
              <Text style={styles.label}>ph</Text>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.cardText}>{data.efficiency}</Text>
              </View>
              <Text style={styles.label}>efficiency</Text>
            </View>
          </View>

          <View style={styles.suggestionBox}>
            <Text style={styles.suggestionContent}>{data.suggestion}</Text>
          </View>
          <Text style={styles.suggestionText}>Suggestions</Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default Output;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    resizeMode: 'cover',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 30,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    height: 160,
    width: 160,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    textTransform: 'lowercase',
  },
  suggestionBox: {
    height: 180,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  suggestionContent: {
    fontSize: 16,
    color: '#000',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loader: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderColor: '#ccc',
    borderTopColor: '#333',
    borderRadius: 30,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#555',
  },
});
