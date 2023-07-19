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
import React, {useContext, useState} from 'react';
import {CustomHeader} from '../../Components/CustomHeader';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

import Toast from 'react-native-root-toast';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login} from '../../API/ApiIndex';
export default function LoginScreen({navigation}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [userResponse, setuserResponse] = useState([]);
  // Make the API request

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const renderToggleIcon = () => {
    if (isPasswordVisible) {
      return (
        <TouchableOpacity
          style={{justifyContent: 'center', position: 'absolute', right: 15}}
          onPress={togglePasswordVisibility}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../Assests/unhide.png')}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{justifyContent: 'center', position: 'absolute', right: 15}}
          onPress={togglePasswordVisibility}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../Assests/hide.png')}
          />
        </TouchableOpacity>
      );
    }
  };
  const [Email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [Loader, setLoader] = useState(false);
  console.log('emaill===', Email);
  console.log('password==', password);

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#00ffff' }]}>
      <CustomHeader
        onLeftPress={() => navigation.replace('OnboardingScreen')} onCenterPress={undefined} textCenter={undefined}      />
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require('../../Assests/Profile.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
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
        {renderToggleIcon()}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        
      </View>
      <View
        style={{
          width: '100%',
          marginVertical: '20%',
        }}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('HomeScreen')
        }} style={styles.LoginButton}>
          {Loader ? (
            <ActivityIndicator size={'small'} color={'white'} />
          ) : (
            <Text style={styles.LoginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegistrationScreen');
          }}>
          <Text style={styles.doNotHaveAccount}>Register</Text>
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
  LoginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  doNotHaveAccount: {
    textAlign: 'right',
    marginHorizontal: 25,
    fontSize:18,
    fontWeight: '700',
    backgroundColor:"#000",
    width:100,
    color:"#fff",
    textAlign: 'center',
    paddingHorizontal: 4,
    paddingVertical:8,
    borderRadius:25
  },
});
