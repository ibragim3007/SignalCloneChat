import React from 'react';
import ChatRoom from '../components/ChatRoom/ChatRoom'
import ChatList from '../components/ChatsList/ChatsList'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler"

const Stack = createStackNavigator();

type propsChatList = {
  chatsSection: chatsSection[]
}

const NavigatorMenu:React.FC<propsChatList> = ({chatsSection}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='ChatList' 
          component={ChatList}
          options={{title: 'Home'}}
          initialParams={{chatsSection}}
          />
        <Stack.Screen 
          name='ChatRoom' 
          component={ChatRoom}
          options={{title: 'Chat'}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigatorMenu;