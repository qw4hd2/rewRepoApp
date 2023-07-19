import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
export const CustomHeader = ({onLeftPress, onCenterPress, textCenter}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress}>
        <Image
          source={require('../Assests/arrowLeft.png')}
          style={styles.leftImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{position: 'absolute', right: '45%'}}
        onPress={onCenterPress}>
        <Text style={{fontWeight:'bold',fontSize:20}}>WhatsThat</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 16,
  },
  leftImage: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  centerImage: {
    width: 99,
    height: 23,
  },
};
