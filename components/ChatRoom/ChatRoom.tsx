import React, { useRef, useCallback, useState } from 'react'
import { StyleSheet, Animated, Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from './Input';
import Message from './Message'


const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const СhatRoom: React.FC = ({ route }) => {

  const messagesChat = route.params.messages.filter((message) => message.infoAboutChat.idChat === route.params.chatInfo.idChat)
  return (
    <View style={styles.СhatRoom}>
      <View style={styles.messages}>
        <FlatList
          progressViewOffset={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          inverted data={messagesChat}
          renderItem={({ item }) => (
            <Message message={item} />
          )} />
      </View>
      <Input />
    </View>
  )
}

const styles = StyleSheet.create({
  СhatRoom: {
    paddingHorizontal: 0,
    // backgroundColor: 'rgba(213, 245, 227, 1)',
    flex: 1,
  },
  messages: {
    flex: 1,

  },
});


export default СhatRoom