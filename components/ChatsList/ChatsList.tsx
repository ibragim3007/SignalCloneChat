import React from 'react';
import { StyleSheet,Button, Text, Image, View, TouchableHighlight, FlatList } from 'react-native';
import { chatsSection } from '../../Interfaces';
import ChatItem from './ChatItem';



const ChatsList:React.FC = ( {navigation, route}) => {

  return (
    <View style={styles.ChatsList}>
      <FlatList showsVerticalScrollIndicator={false} data={route.params.chatsSection} renderItem={({item}) => (
        <ChatItem navigation={navigation} chatInfo={item}/>
      )}>
      </FlatList>
    </View>
  );
}

const sizeImage = 50

const styles = StyleSheet.create({
  ChatsList: {
    paddingHorizontal: 0,
  },
});


export default ChatsList