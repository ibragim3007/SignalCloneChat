import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';
import { chatsSection } from '../../Interfaces';


type ChatItemProps = {
    chatInfo: chatsSection
}

const ChatItem:React.FC<ChatItemProps> = ({chatInfo}) => {
  return (
      <TouchableHighlight>
        <View style={[styles.wrapperUserWithChat, chatInfo.messagesNotRead ? styles.messageHighLights: null]}>
          <Image style={styles.image} source={{ uri: chatInfo.image}} />

          { chatInfo.messagesNotRead ?
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeContainerNumber}>{chatInfo.messagesNotRead}</Text>
          </View> : null
          }
          <View style={styles.infoUser}>
            <View style={styles.wrapperTime}>
              <Text style={styles.profileLoginUsersChat}>{chatInfo.login}</Text>
              <Text style={styles.time}>{chatInfo.time}</Text>
            </View>
            <Text numberOfLines={1} style={styles.lastMessage}>{chatInfo.lastMessage}</Text>
          </View>
        </View>
      </TouchableHighlight>
  );
}

const sizeImage = 50

const styles = StyleSheet.create({
  ChatsList: {
    paddingHorizontal: 0,
  },
  image: {
    width: sizeImage,
    height: sizeImage,
    borderRadius: sizeImage / 2,
    backgroundColor: 'yellow'
  },
  badgeContainer: {
    width: 19,
    height: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3872E9',
    position: 'absolute',
    left: 50,
    top: 14,
    borderRadius: 25
  },
  badgeContainerNumber: {
    color: 'white'
  },
  wrapperUserWithChat: {
    padding: 15,
    flexDirection: 'row',
  },
  messageHighLights: {
    backgroundColor: 'rgba(0,100,230, 0.2)'
  },
  wrapperTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  time: {
    fontSize: 12,
    color: 'grey',
  },
  profileLoginUsersChat: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoUser: {
    marginLeft: 15,
    flex: 1
  },
  lastMessage: {
    marginTop: 4,
    color: 'grey'
  },
});


export default ChatItem