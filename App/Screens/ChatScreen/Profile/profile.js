import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {CustomProfileHeader} from './../../../Components/CustomeProfileHeader';
import DocumentPicker from 'react-native-document-picker';

const Profile = ({navigation}) => {
  const [imageUri, setImageUri] = useState(
    require('../../../Assests/Image1.png'),
  );

  const handleImagePress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setImageUri({uri: res[0].uri});
    } catch (error) {
      console.log(error); // Handle the error
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomProfileHeader
        imageleft={require('../../../Assests/arrowLeft.png')}
        texttcenter={'Profile Setting'}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.middleContainer}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={imageUri} style={styles.bigImage} />
          <Image
            source={require('../../../Assests/camera.png')}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <TextInput style={styles.nameText}>Syed Mansoor</TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  middleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#292F3F',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  bigImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  cameraIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  name: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: 40,
  },
  nameText: {
    fontSize: 25,
    fontWeight: '700',
  },
});

export default Profile;
