import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderChats from './components/headerChats/HeaderChats';
import NavigatorMenu from './navigation/index'
import NavigatorAuth from './components/Auth/NavigationAuth';
import { State } from './Redux';
import { AuthContext } from './components/Auth/authContext';

export default function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {
        isAuth
          ? <NavigatorMenu chatsSection={State.chatsSection} messages={State.messages} />
          : <NavigatorAuth />
      }
    </AuthContext.Provider>
    // <NavigatorMenu chatsSection={State.chatsSection} messages={State.messages} /> 
  )
}

const styles = StyleSheet.create({
  container: {
  },
});
