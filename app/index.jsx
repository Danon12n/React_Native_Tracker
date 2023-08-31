import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

import HomePage from '../Pages/HomePage';
import Footer from '../components/Footer';
import Header from '../components/Header';

//TODO: Настроить роутинг между страничками. Смотри Deep Links, Expo Router. Сначала для IOS
export default function Page() {
  const [myRoute, setMyRoute] = useState('home');

  return (
    <View style={styles.container}>
      <Header
        title={new Date().toLocaleDateString('ru-RU', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      />
      <View style={styles.contentContainer}>
        {myRoute === 'home' && <HomePage />}
        {myRoute === 'smth1' && <Text>smth1</Text>}
        {myRoute === 'smth2' && <Text>smth1</Text>}
        {myRoute === 'smth3' && <Text>smth1</Text>}
        {myRoute === 'settings' && <Text>Settings Page</Text>}
      </View>
      <Footer routeSetter={setMyRoute} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '85%',
    paddingVertical: 10,
  },
  container: {
    display: 'flex',
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
