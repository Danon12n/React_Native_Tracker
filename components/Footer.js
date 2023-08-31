import { View, StyleSheet } from 'react-native';
import IconButton from './IconButton';
import React from 'react';

export default function Footer({ routeSetter }) {
  return (
    <View style={styles.footerContainer}>
      <IconButton
        icon='home'
        onPress={() => {
          routeSetter('home');
        }}
      />
      <IconButton
        icon='clockcircle'
        onPress={() => {
          routeSetter('smth1');
        }}
      />
      <IconButton
        icon='clockcircle'
        onPress={() => {
          routeSetter('smth2');
        }}
      />
      <IconButton
        icon='clockcircle'
        onPress={() => {
          routeSetter('smth3');
        }}
      />

      <IconButton
        icon='setting'
        onPress={() => {
          routeSetter('settings');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
});
