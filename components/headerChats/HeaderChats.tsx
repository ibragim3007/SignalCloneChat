import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const HeaderChats:React.FC = () => {
    return(
        <View style={styles.header}>
            
            <Text>HeaderChats</Text>
        </View>
    )
}
 

const styles = StyleSheet.create({
    header: { 
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: 'grey',
        
    },
  });

export default HeaderChats