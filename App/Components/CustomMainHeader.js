import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
export const CustomMainHeader = ({
  onLeftPress,
  onCenterPress,
  imageleft,
  imageCenter,
  imagRight,
  onpressRight,
  texttcenter,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress}>
        <Image source={imageleft} style={styles.leftImage} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{position: 'absolute', right: '45%'}}
        onPress={onCenterPress}>
        
      </TouchableOpacity>
      <Text
        style={{
          position: 'absolute',
          right: '45%',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: '700',
          lineHeight: 19,
        }}>
        {texttcenter}
      </Text>

      <TouchableOpacity
        style={{position: 'absolute', right: 20}}
        onPress={onpressRight}>
        <Image source={imagRight} style={styles.rightImage} />
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    // paddingHorizontal: 16,
  },
  leftImage: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  centerImage: {
    width: 99,
    height: 23,
  },
  rightImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
};
