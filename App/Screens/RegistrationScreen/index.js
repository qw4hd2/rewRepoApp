import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {CustomHeader} from '../../Components/CustomHeader';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import Toast from 'react-native-root-toast';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegistrationApi, login} from '../../API/ApiIndex';
export default function RegistrationScreen({navigation}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [userResponse, setuserResponse] = useState([]);
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [PhoneNo, setPhoneNo] = useState(null);
  const [companyName, setcompanyName] = useState('');
  const [streetAddress2, setstreetAddress2] = useState('');
  const [streetAddress, setstreetAddress] = useState('');
  const [Loader, setLoader] = useState(false);
  return (
    <ScrollView style={[styles.container, { backgroundColor: '#00ffff' }]}>
      <CustomHeader
        onLeftPress={() => navigation.replace('OnboardingScreen')}
      />
      <Text style={styles.personalInfoText}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../Assests/Profile.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoCapitalize="none"
          onChangeText={item => setfirstName(item)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../Assests/Profile.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoCapitalize="none"
          onChangeText={item => setlastName(item)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../Assests/Message.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={item => setEmail(item)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('../../Assests/Lock.png')} />
        <TextInput
          style={styles.input}
          placeholder="****************"
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          onChangeText={item => {
            setpassword(item);
          }}
          // Additional props for TextInput
        />
      </View>
      <View
        style={{
          width: '100%',
          marginVertical: '20%',
        }}>
        <TouchableOpacity style={styles.LoginButton}>
          {Loader ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Text style={styles.RegisterButtonText}>Register</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  personalInfoText: {
    marginHorizontal: 25,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#888',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FAFAFA',
  },
  input: {
    width: '100%',
    marginLeft: 8,
    fontSize: 16,
  },
  loaderContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as per your preference
  },
  icon: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  LoginButton: {
    width: '90%',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    marginBottom: 20,
    //
  },
  RegisterButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
});
