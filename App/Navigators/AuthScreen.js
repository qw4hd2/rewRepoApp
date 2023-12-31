import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from '../Screens/RegistrationScreen';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import Profile from '../Screens/ChatScreen/Profile/profile';
import NewContactScreen from '../Screens/NewContactScreen';
import BlockUserScreen from '../Screens/BlockUserScreen';
import AddContactScreen from '../Screens/AddContactScreen';
import ViewContactScreen from '../Screens/ViewContactScreen';

const Stack = createStackNavigator();

export default function AuthScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="FirstSplashScreen" component={FirstSplashScreen} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewContactScreen" component={NewContactScreen} />
        <Stack.Screen name="BlockUserScreen" component={BlockUserScreen} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ViewContactScreen" component={ViewContactScreen} />

        <Stack.Screen name="AddContactScreen" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
