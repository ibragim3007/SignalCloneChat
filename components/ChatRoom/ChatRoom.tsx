import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-vector-icons/Icon'


const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const СhatRoom:React.FC = ({route}) => {
  console.log(route.params.chatInfo.idChat)
    return(
        <View screenOptions={{headerShown: false}} style={styles.СhatRoom}>
            <Text>
              Chat Room!{'\n'} 
              Id: {route.params.chatInfo.idChat}{'\n'}
              People with who chating: {route.params.chatInfo.login}
              </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    СhatRoom: {
      paddingHorizontal: 0,
    },
  });
  

export default СhatRoom