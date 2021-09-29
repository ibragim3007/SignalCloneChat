import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from './Message'


const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const Input: React.FC = () => {

    const colorPassive = "#444"
    const colorActive = "rgba(42, 142, 229, 1)"

    const [value, setValue] = useState('')
    const [colorSendButton, setColorSendButton] = useState<string>(colorPassive)

    const onChange = (text: string) => {
        setValue(text)
        if(text) setColorSendButton(colorActive)
        else setColorSendButton(colorPassive)
    }

    return (
        <View style={styles.InputContainer}>
            <TextInput style={styles.Input} value={value} onChangeText={onChange} placeholder={"Напишите сообщение!"} />
            <Icon
                name='send'
                color={colorSendButton}
                size={25}
                style={styles.icons}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(220,220,220,1)',
        paddingRight: 40,
        paddingVertical: 3,
        alignItems: 'center',
        
    },
    Input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    icons: {
        
    },

});


export default Input