import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-vector-icons/Icon'


const Message: React.FC = ({ message }) => {
    return (
        <View style={[styles.message,
        {
            backgroundColor: message.fromMe ? '#ddd' : 'rgba(52, 162, 239, 1)',
            marginLeft: message.fromMe ? 'auto' : 5,
            marginRight: message.fromMe ? 5 : 'auto',
        }
        ]}>
            <Text style={[styles.messageText, {color: message.fromMe ? "#222" : '#eee',}]}>
                {message.infoContent.contentSended}</Text>
            <Text style={[styles.time, {color: message.fromMe ? "#777" : '#ddd'}]}>{message.infoContent.timeSended}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    message: {
        padding: 10,
        maxWidth: '75%',
        borderRadius: 25,
        margin: 12,
        margin: 5
    },
    messageText: {
        fontSize: 16
    },
    time: {
        textAlign: 'right',
        marginRight: 5,
        fontSize: 11,
    }
});


export default Message