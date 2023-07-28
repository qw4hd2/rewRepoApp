import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import NewContactScreen from '../Screens/NewContactScreen';
import BlockUserScreen from '../Screens/BlockUserScreen';
import AddContactScreen from '../Screens/AddContactScreen';
import ViewContactScreen from '../Screens/ViewContactScreen';
const Stack = createStackNavigator();
export default function UnAuthScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}

        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="NewContactScreen" component={NewContactScreen} />
        <Stack.Screen name="BlockUserScreen" component={BlockUserScreen} />
        <Stack.Screen name="AddContactScreen" component={AddContactScreen} />
        <Stack.Screen name="ViewContactScreen" component={ViewContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
