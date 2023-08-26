import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

import IconButton from '../components/IconButton';
import WeightTracker from '../components/WeightTracker';
import HomePage from '../Pages/HomePage';

//TODO: Настроить роутинг между страничками. Смотри Deep Links, Expo Router. Сначала для IOS
export default function Page() {
  const [myRoute, setMyRoute] = useState('home');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hellooooo</Text>
      </View>
      <View style={styles.contentContainer}>
        {myRoute === 'home' && <HomePage />}
        {myRoute === 'smth1' && <Text>smth1</Text>}
        {myRoute === 'smth2' && <Text>smth1</Text>}
        {myRoute === 'smth3' && <Text>smth1</Text>}
        {myRoute === 'settings' && <Text>Settings Page</Text>}
      </View>
      <View style={styles.footerContainer}>
        <IconButton
          icon='home'
          onPress={() => {
            setMyRoute('home');
          }}
        />
        <IconButton
          icon='clockcircle'
          onPress={() => {
            setMyRoute('smth1');
          }}
        />
        <IconButton
          icon='clockcircle'
          onPress={() => {
            setMyRoute('smth2');
          }}
        />
        <IconButton
          icon='clockcircle'
          onPress={() => {
            setMyRoute('smth3');
          }}
        />

        <IconButton
          icon='setting'
          onPress={() => {
            setMyRoute('settings');
          }}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerContainer: {
    position: 'absolute',
    top: 30,
    width: '90%',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
