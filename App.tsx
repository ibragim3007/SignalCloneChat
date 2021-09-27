import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatsList from './components/ChatsList/ChatsList';
import HeaderChats from './components/headerChats/HeaderChats';
import NavigatorMenu from './navigation/index'
import { State } from './Redux';

export default function App() {

  return (
      <NavigatorMenu chatsSection={State.chatsSection}/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
});
