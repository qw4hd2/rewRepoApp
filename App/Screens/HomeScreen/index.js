import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FloatingAction} from 'react-native-floating-action';

export default function App({navigation}) {
  const actions = [
    {
      text: 'View Contact',
      name: 'view_contact',
      icon: require('../../Assests/Image1.png'),
      position: 1,
    },
    {
      text: 'Add Contact',
      name: 'add_contact',
      icon: require('../../Assests/Image1.png'),
      position: 2,
    },
  ];
  const data = [
    {
      id: 1,
      imageSource: require('../../Assests/Image1.png'),
      name: 'Mansoor',
    },
    {
      id: 2,
      imageSource: require('../../Assests/Image1.png'),
      name: 'Saad',
    },
    {
      id: 3,
      imageSource: require('../../Assests/Ellipse3.png'),
      name: 'Ali',
    },
    {
      id: 4,
      imageSource: require('../../Assests/Ellipse2.png'),
      name: 'Jhon',
    },
    {
      id: 5,
      imageSource: require('../../Assests/Ellipse4.png'),
      name: 'Nabeel',
    },
  ];
  const data2 = [
    {
      id: '1',
      imageSource: require('../../Assests/Ellipse4.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: 'Tue',
    },
    {
      id: '2',
      imageSource: require('../../Assests/Ellipse1.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: '08:43',
    },
    {
      id: '3',
      imageSource: require('../../Assests/Ellipse2.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: 'Sun',
    },
    {
      id: '4',
      imageSource: require('../../Assests/Ellipse3.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: '18 Mar',
    },
    {
      id: '5',
      imageSource: require('../../Assests/Ellipse1.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: '01 Feb',
    },
    {
      id: '6',
      imageSource: require('../../Assests/Ellipse4.png'),
      name: 'Danny Hopkins',
      message: 'Will do, super, thank you',
      date: 'Tue',
    },
  ];
  const [togle, settogle] = useState('');
  const renderItem = ({item}) => (
    <View style={{marginBottom: 20}}>
      <TouchableOpacity style={{marginHorizontal: 15, marginVertical: 10}}>
        <Image
          style={{width: 70, height: 70, marginBottom: 14}}
          source={item.imageSource}
        />
        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginVertical: 15,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Messages
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={{width: 40, height: 40, marginRight: 40}}
            source={require('../../Assests/Image1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            settogle(!togle);
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              tintColor: 'white',
            }}
            source={require('../../Assests/dots.png')}
          />
        </TouchableOpacity>
        {togle && (
          <View
            style={{
              backgroundColor: '#B3B9C9',
              position: 'absolute',
              right: 1,
              top: 30,
              width: 150,
              marginHorizontal: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              zIndex:999
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BlockUserScreen');
              }}
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
                Block User List
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NewContactScreen');
              }}
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
      </View>
      <View style={{height: 50}}></View>
      <Text style={{color: '#FFFFFF', marginHorizontal: 15, fontSize: 13}}>
        Recent
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
      <View style={styles.card}>
        <FlatList
          data={data2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatScreen');
              }}
              style={{
                marginVertical: 15,
                marginHorizontal: 15,
                flexDirection: 'row',
              }}>
              <Image source={item.imageSource} />
              <View style={{marginHorizontal: 15, justifyContent: 'center'}}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                  {item.name}
                </Text>
                <Text style={{color: '#B3B9C9'}}>{item.message}</Text>
              </View>
              <Text
                style={{
                  color: '#B3B9C9',
                  position: 'absolute',
                  right: 10,
                  marginVertical: 15,
                }}>
                {item.date}
              </Text>
            </TouchableOpacity>
          )}
        />
        <FloatingAction
          actions={actions}
          onPressItem={item => {
            if (item == 'add_contact') {
              navigation.navigate('AddContactScreen');
            } else {
              navigation.navigate('ViewContactScreen');
            }
            console.log('itemmmmmmm', item);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B202D',
  },
  card: {
    width: '100%',
    height: '60%',

    backgroundColor: '#292F3F',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
