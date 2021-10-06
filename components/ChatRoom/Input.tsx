import React, { useState, useRef, useCallback } from 'react'
import { StyleSheet, Animated, Text, View, FlatList, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from './Message'

const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const Input: React.FC = () => {

    const colorPassive = "#777"
    const colorActive = "rgba(42, 142, 229, 1)"

    const [value, setValue] = useState('')
    const [colorSendButton, setColorSendButton] = useState<string>(colorPassive)

    const onChange = (text: string) => {
        setValue(text)
        if(text.trim(' ')) {
            setColorSendButton(colorActive)
            upSendButton(false)
        }
        else {
            setColorSendButton(colorPassive)
            downSendButton(false)
        }
    }

    const move = useRef<number>(new Animated.Value(100)).current;
    const upSendButton = useCallback((isConnected: boolean): void => {
        Animated.spring(move, {
            toValue:0,
            duration: 125, 
            useNativeDriver: true,
        }).start();
    },[move]
    )

    const downSendButton = useCallback((isConnected: boolean): void => {
        Animated.spring(move, {
            toValue: 100,
            duration: 125, 
            useNativeDriver: true,
        }).start();
    },[move]
    )

    // const moveImageIcon = useRef<number>(new Animated.value(100)).current;
    // const hideImageIcon = useCallback(():void => {
    //     Anumated.spring(moveImageIcon, {
    //         toValue: 100,
    //         duration: 125, 
    //         useNativeDriver: true,
    //     })
    // },[moveImageIcon]
    // )

    return (
        <View style={styles.InputContainer}>
            <TextInput style={styles.Input} value={value} onChangeText={onChange} placeholder={"Напишите сообщение!"} />
            <Animated.View style={{transform: [{translateY: move}]}} >
            {/* <Icon 
                name='image'
                
                size={25}
            /> */}
            <Icon
                name='send'
                color={colorSendButton}
                size={25}  
            />
            </Animated.View>
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
        overflow: 'hidden'
    },
    Input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
});


export default Input