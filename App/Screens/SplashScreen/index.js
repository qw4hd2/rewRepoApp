import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 2000);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TextStyle}>WhatsThatUsman</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  splashLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  
  TextStyle: {
    textAlign:"center",
    fontSize:30,
    fontWeight:300
  }
});
