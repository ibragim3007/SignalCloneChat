import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatsList from './components/ChatsList/ChatsList';
import HeaderChats from './components/headerChats/HeaderChats';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderChats />
      <ChatsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
