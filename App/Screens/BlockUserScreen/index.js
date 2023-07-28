import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function BlockUserScreen() {
  const data2 = [
    {
      id: '1',
      imageSource: require('../../Assests/Ellipse4.png'),
      name: '+923497473897',
      message: 'Will do, super, thank you',
      date: 'Tue',
    },
    {
      id: '2',
      imageSource: require('../../Assests/Ellipse1.png'),
      name: '+923497473897',
      message: 'saad',
      date: '08:43',
    },
    {
      id: '3',
      imageSource: require('../../Assests/Ellipse2.png'),
      name: '+923497473897',
      message: 'saad',
      date: 'Sun',
    },
    {
      id: '4',
      imageSource: require('../../Assests/Ellipse3.png'),
      name: 'Danny Hopkins',
      message: '+12345667788',
      date: '18 Mar',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'green', paddingVertical: 10}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            paddingHorizontal: 10,
            paddingVertical: 6,
            fontSize: 18,
            marginLeft: 10,
          }}>
          Block User List
        </Text>
      </View>
      <FlatList
        data={data2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              marginVertical: 15,
              marginHorizontal: 15,
              flexDirection: 'row',
              backgroundColor: 'orange',
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
            }}>
            <Image source={item.imageSource} />
            <View style={{marginHorizontal: 15, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
