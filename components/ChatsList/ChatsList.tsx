import React from 'react';
import { StyleSheet, Text,Image, View,TouchableHighlight } from 'react-native';


const ChatsList = () => {
  return (
    <View style={styles.ChatsList}>
      <TouchableHighlight style={styles.userWithChat}>
        <View style={styles.wrapperUserWithChat}>
          <Image style={styles.image} source={{uri: 'https://sun1-92.userapi.com/s/v1/ig2/usgKdwx3PQ5nlcjd6X8w747aDOLtIofDr4fprRfgb3_jcHfTA7PQly5--oindRygabnsF7vRzsJDHFXxMqbgdaVB.jpg?size=50x50&quality=96&crop=121,85,682,682&ava=1'}} />
          <Text>David K.</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const sizeImage = 50

const styles = StyleSheet.create({
  ChatsList: {
    paddingHorizontal: 25,
    backgroundColor: 'red'
  },
  userWithChat: {
    padding: 8,
  },
  image: {
    width: sizeImage,
    height: sizeImage,
    borderRadius: sizeImage / 2 
  },
  wrapperUserWithChat: {
    padding: 10,
    flexDirection: 'row'
  }
});


export default ChatsList