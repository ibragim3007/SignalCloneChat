import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, FlatList } from 'react-native';
import { chatsSection } from '../../Interfaces';
import ChatItem from './ChatItem';


type propsChatList = {
  chatsSection: chatsSection[]
}


const ChatsList:React.FC<propsChatList> = ({chatsSection}) => {
  
  console.log(chatsSection)
  return (
    <View style={styles.ChatsList}>
      <FlatList data={chatsSection} renderItem={({item}) => (
        <ChatItem chatInfo={item}/>
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