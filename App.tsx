import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderChats from './components/headerChats/HeaderChats';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderChats />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
