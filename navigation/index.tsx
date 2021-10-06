import React from 'react';
import HeaderChats from '../components/headerChats/HeaderChats'
import ChatRoom from '../components/ChatRoom/ChatRoom'
import ChatList from '../components/ChatsList/ChatsList'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, TransitionPresets, CardStyleInterpolators , HeaderStyleInterpolators } from '@react-navigation/stack';
import "react-native-gesture-handler"
import Imessage from '../Interfaces'

const Stack = createStackNavigator();

type propsChatList = {
  chatsSection: chatsSection[],
  messages: Imessages[]
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const NavigatorMenu:React.FC<propsChatList> = ({chatsSection, messages}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: config,
          }
        }}
      >
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
          options={
            {title: 'Chat'}
          }
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