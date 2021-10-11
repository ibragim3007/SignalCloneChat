import React, { useState, useRef, useCallback } from 'react'
import { StyleSheet, Animated, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from './Message'

const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const Input: React.FC = () => {

    const colorPassive = "#555"
    const colorActive = "rgba(42, 142, 229, 1)"

    const [value, setValue] = useState('')
    const [colorSendButton, setColorSendButton] = useState<string>(colorPassive)

    const onChange = (text: string) => {
        setValue(text)
        if (text.trim(' ')) {
            setColorSendButton(colorActive)
            upSendButton(false)
            hideImageIcon(false)
        }
        else {
            setColorSendButton(colorPassive)
            downSendButton(false)
            ShowImageIcon(false)
        }
    }

    const durationAnimationChangeButtonWithStringInInputPole = 30;

    const move = useRef<number>(new Animated.Value(50)).current;
    const upSendButton = useCallback((): void => {
        Animated.spring(move, {
            toValue: 0,
            duration: durationAnimationChangeButtonWithStringInInputPole,
            useNativeDriver: true,
        }).start();
    }, [move]
    )

    const downSendButton = useCallback((): void => {
        Animated.spring(move, {
            toValue: 50,
            duration: durationAnimationChangeButtonWithStringInInputPole,
            useNativeDriver: true,
        }).start();
    }, [move]
    )

    const moveImageIcon = useRef<number>(new Animated.Value(0)).current;
    const hideImageIcon = useCallback((): void => {
        Animated.spring(moveImageIcon, {
            toValue: 100,
            duration: durationAnimationChangeButtonWithStringInInputPole,
            useNativeDriver: true,
        }).start();
    }, [moveImageIcon]
    )

    const ShowImageIcon = useCallback((): void => {
        Animated.spring(moveImageIcon, {
            toValue: 0,
            duration: durationAnimationChangeButtonWithStringInInputPole,
            useNativeDriver: true,
        }).start();
    }, [moveImageIcon]
    )

    return (
        <View style={styles.InputContainer}>
            <TouchableOpacity style={{ paddingLeft: 15 }}>
                <Icon
                    name="insert-emoticon"
                    color={colorPassive}
                    size={28}
                />
            </TouchableOpacity>
            <TextInput style={styles.Input} value={value} onChangeText={onChange} placeholder={"Напишите сообщение!"} />

            <Animated.View style={{ transform: [{ translateX: moveImageIcon }], position: 'absolute', right: 20 }}>
                <Icon
                    name='image'
                    color={colorPassive}
                    size={28}
                />
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: moveImageIcon }], position: 'absolute', right: 55 }}>
                <Icon
                    name='mic'
                    color={colorPassive}
                    size={28}
                />
            </Animated.View>

            <Animated.View style={{ transform: [{ translateY: move }], position: 'absolute', right: 20 }} >
                <Icon
                    name='send'
                    color={colorPassive}
                    size={28}
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
        overflow: 'hidden',
    },
    Input: {
        width: '85%',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 10,
        fontSize: 17,
    },
});


export default Input