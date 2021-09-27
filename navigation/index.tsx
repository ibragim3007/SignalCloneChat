import React from 'react';
import HeaderChats from '../components/headerChats/HeaderChats'
import ChatRoom from '../components/ChatRoom/ChatRoom'
import ChatList from '../components/ChatsList/ChatsList'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler"
import Imessage from '../Interfaces'

const Stack = createStackNavigator();

type propsChatList = {
  chatsSection: chatsSection[],
  messages: Imessages[]
}

const NavigatorMenu:React.FC<propsChatList> = ({chatsSection, messages}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='ChatList' 
          component={ChatList}
          options={{
            headerTitle: HeaderChats,
            headerStyle: styles.headerTopMenuNavigationChat,
          }}
          initialParams={{chatsSection}}
          />
        <Stack.Screen 
          name='ChatRoom' 
          component={ChatRoom}
          options={{title: 'Chat'}}
          initialParams={{messages}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//styles for header top navigation HERE
const styles = StyleSheet.create({
  headerTopMenuNavigationChat: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
});



export default NavigatorMenu;