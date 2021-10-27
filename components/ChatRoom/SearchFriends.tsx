import React, { useState, useRef, useCallback } from 'react'
import { StyleSheet, Animated, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from './Message'

const avatarImg = 'https://sun9-67.userapi.com/impg/pvQLlVKXH5-s1w7GaKCBBgMwG7ubTnT4MDlA9w/sE6O7VJ4ZdM.jpg?size=2560x1440&quality=95&sign=54583f12ee6ccec054f1fab552c8dc5c&type=album'


const SearchFriends: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Searxhing...</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});


export default SearchFriends