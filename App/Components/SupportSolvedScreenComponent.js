import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Gettickets} from '../API/ApiIndex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const width = Dimensions.get('screen').width;
export default function SupportSolvedScreeenComponent() {
  const [Ticket, setgetTicket] = useState([]);
  const [loader, setloader] = useState(false);

  const getTicketFunction = async () => {
    setloader(true);
    const clientid = await AsyncStorage.getItem('clientId');

    await Gettickets(clientid).then(response => {
      setgetTicket(response.tickets.ticket);
      setloader(false);
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      getTicketFunction();
    }, []),
  );

  const CardItem = ({item}) => {
    const navigation = useNavigation();
    const currentDate = moment();
    const startDate = moment(Ticket?.date);
    console.log('start date=====', startDate);
    const numberOfDays = currentDate.diff(startDate, 'days');
    console.log('numberOfDays=====', numberOfDays);
    if (item?.status === 'Closed') {
      return (
        <View style={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.requestText}>REQUEST #{item?.tid}</Text>
            <Text style={styles.newText}>New</Text>
          </View>
          <Text style={styles.detailText}>Details</Text>
          <Text style={styles.detailDescriptionText}>{item?.subject}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginVertical: 10,
            }}>
            <View>
              <Text
                style={{fontWeight: '500', fontSize: 15, marginVertical: 3}}>
                Submitted
              </Text>
              <Text style={{color: '#94A3B8'}}>
                {numberOfDays + ''} Days Ago
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'black',
                borderRadius: 20,
                width: 100,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text numberOfLines={1} style={{color: 'white'}}>
                {item?.status}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <ActivityIndicator
          style={{justifyContent: 'center', marginVertical: '50%'}}
          size={'large'}
          color={'blue'}
        />
      ) : (
        <FlatList
          data={Ticket}
          ListEmptyComponent={
            <Text style={{color: 'red'}}>No Ticket Is Closed Yet</Text>
          }
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => <CardItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    width: (width / 100) * 90,
    borderRadius: 15,
    backgroundColor: '#F5FAFF',
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#94A3B8',
  },
  requestText: {
    margin: 15,
    fontSize: 14,
    fontWeight: '400',
    color: '#212121',
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
    marginBottom: 7.5,
    fontWeight: '600',
    color: '#000000',
    fontSize: 14,
  },
  detailDescriptionText: {
    marginHorizontal: 15,
    fontWeight: '600',
    color: '#94A3B8',
    fontSize: 12,
  },
});
