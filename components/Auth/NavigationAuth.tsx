import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "react-native-gesture-handler"

import SignIn from './SignIn';
import Register from './Register';

const Stack = createStackNavigator();

const NavigatorAuth:React.FC = ({changeStatusAuth}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='SignIn' 
          component={SignIn}
          options={{
            headerTitle: "",
            headerStyle: styles.headerTopMenuNavigationChat,
          }}
          initialParams={{changeStatusAuth}}
          />
        <Stack.Screen 
          name='Register' 
          component={Register}
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
  headerTopMenuNavigationChat: {
      height: 0
  }
});



export default NavigatorAuth;