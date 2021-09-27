import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatsList from './components/ChatsList/ChatsList';
import HeaderChats from './components/headerChats/HeaderChats';

import { State } from './Redux';

export default function App() {
  
  return (
    <View style={styles.container}>
      <HeaderChats />
      <ChatsList chatsSection={State.chatsSection}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
});
