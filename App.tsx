import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatsList from './components/ChatsList/ChatsList';
import HeaderChats from './components/headerChats/HeaderChats';
import NavigatorMenu from './navigation';
import { State } from './Redux';

export default function App() {
  
  return (
    <View style={styles.container}>
      <HeaderChats />
      {/* <NavigatorMenu /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
});
