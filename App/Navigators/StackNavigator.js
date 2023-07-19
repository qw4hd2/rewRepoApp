import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UnAuthScreen from './UnAuthScreen';
import AuthScreen from './AuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StackNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  console.log('isloffedin===', isLoggedIn);
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(Boolean(value));
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };

  return isLoggedIn ? <UnAuthScreen /> : <AuthScreen />;
}

const styles = StyleSheet.create({});
