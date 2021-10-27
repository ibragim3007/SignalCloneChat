import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, TransitionPresets, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import "react-native-gesture-handler"

import SignIn from './SignIn';
import Register from './Register';

const Stack = createStackNavigator();

const NavigatorAuth: React.FC = ({ changeStatusAuth }) => {

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
          name='SignIn'
          component={SignIn}
          options={{
            headerTitle: "",
            headerStyle: styles.headerTopMenuNavigationChat,
          }}
          initialParams={{ changeStatusAuth }}
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