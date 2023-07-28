import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {CustomMainHeader} from '../../Components/CustomMainHeader';
import moment from 'moment';

export default function ChatScreen({navigation, route}) {
  const [textmessgae, settextmessgae] = useState('');
  const [togle, settogle] = useState('');
  const convertDateFormat = dateString => {
    const date = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
    const formattedDate = date.format('h:mm A');
    return formattedDate;
  };
  const renderView = () => {
   
      return (
        <ScrollView style={{marginBottom: '17%', flex: 1}}>
          <View>
          <ScrollView
                
                style={[
                  styles.card,
                  {
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderBottomWidth: 0,
                    borderTopWidth: 0,
                  },
                ]}>
               
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{justifyContent: 'center'}}
                    source={require('../../Assests/ProfilePhoto.png')}
                  />
                  <Text style={styles.detailText}>Syed Mansoor</Text>
                </View>
                <Text style={styles.detailDescriptionText}>
                  New Message
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    marginHorizontal: 25,
                    marginVertical: 10,
                  }}>
                  {"22/7/2023"}
                </Text>
                
              </ScrollView>

              <>
                <View
                  style={{
                    height: 1,
                    backgroundColor: 'grey',
                    marginHorizontal: '17%',
                  }}></View>
                <View
                  style={[
                    styles.card,
                    {
                      marginTop: 0,
                      borderTopRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopWidth: 0,
                      borderRightWidth: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: 0,
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      marginBottom: 10,
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{justifyContent: 'center'}}
                      source={require('../../Assests/ProfilePhoto.png')}
                    />
                    <Text style={styles.detailText}>
                      Usman Bhai
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.detailDescriptionText,
                      {
                        backgroundColor: '#F3F4F7',
                        color: 'black',
                        elevation: 0.5,
                      },
                    ]}>
                    here is the text
                  </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginHorizontal: 25,
                      marginVertical: 10,
                    }}>
                    {"22/7/2023"}
                  </Text>
                </View>
              </>
          </View>
          {/* )} */}
        </ScrollView>
      );
   
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomMainHeader
        imageleft={require('../../Assests/arrowLeft.png')}
        texttcenter={'Message'}
        imagRight={require('../../Assests/dots.png')}
        onLeftPress={() => {
          navigation.goBack();
        }}
        onpressRight={()=>{
            settogle(!togle);
        }}
      />
        {togle && (
          <View
            style={{
              backgroundColor: '#B3B9C9',
              position: 'absolute',
              right: 10,
              top: 60,
              width: 150,
              marginHorizontal: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              zIndex:999
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#292F3F',
                marginVertical: 5,
                padding:10,
              }}>
              <Text style={{color: 'white', 
                textAlign: 'center',
                fontWeight:700,
                fontSize:14
              }}>
                Block User
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#292F3F',
                marginVertical: 5,
                padding:10,
              }}>
              <Text style={{color: 'white', 
                textAlign: 'center',
                fontWeight:700,
                fontSize:14
              }}>
                Delete chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: '#292F3F',
              padding:10,
              zIndex:1}}>
              <Text style={{color: 'white', 
               textAlign: 'center',
               fontWeight:700,
               fontSize:14
               }}>
                Remove contact
              </Text>
            </TouchableOpacity>
            
          </View>
        )}
      {renderView()}
      <View
        style={{
          backgroundColor: '#F6F7F9',
          position: 'absolute',
          bottom: 5,
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 20,
          marginHorizontal: 10,
        }}>
        <TextInput
          style={{paddingVertical: 10}}
          value={textmessgae}
          placeholder="Type your Message here..."
          onChangeText={text => {
            settextmessgae(text);
          }}
        />
        
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 30,
          }}>
          <Image
            resizeMode="contain"
            style={{width: 35, height: 35}}
            source={require('../../Assests/send.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    width: 335,
    paddingVertical: 13,
    borderRadius: 15,
    backgroundColor: '#F5FAFF',
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: '#94A3B8',
  },
  requestText: {
    margin: 15,
    fontSize: 14,
    fontWeight: '700',
    color: '#212121',
    textAlign: 'center',
  },
  newText: {
    color: 'red',
    marginHorizontal: 20,
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 17,
  },
  detailText: {
    marginHorizontal: 15,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#000000',
    fontSize: 14,
  },
  detailDescriptionText: {
    marginHorizontal: 15,
    width: '88%',
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    borderRadius: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    backgroundColor: '#25282B',
    borderTopLeftRadius: 1,
  },
});
