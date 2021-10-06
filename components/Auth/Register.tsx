import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import ChatsList from './components/ChatsList/ChatsList'
import HeaderChats from './components/headerChats/HeaderChats'
import NavigatorMenu from './navigation/index'
import { State } from './Redux'


const Register = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repeatePassword, setReapetePassword] = useState('')

    const handlerRegisterButton = () => {
        if(loginText && passwordText) Register(loginText, passwordText)
    }


    return (
        <View style={styles.container} >
            <View style={styles.logo}>
                <Text style={styles.logo}>Register</Text>
            </View>
            <View style={styles.form}>
                <TextInput 
                    value={login} 
                    onChangeText={(text) => setLogin(text)} 
                    style={styles.input} 
                    placeholder="Create your login" 
                />
                <TextInput 
                    value={password} 
                    onChangeText={(text) => setPassword(text)} 
                    secureTextEntry={true}style={styles.input} 
                    placeholder="password" 
                />
                <TextInput 
                    value={repeatePassword} 
                    onChangeText={(text) => setReapetePassword(text)} 
                    secureTextEntry={true}style={styles.input} 
                    placeholder="repeate password" 
                />
                <Button onPress={handlerRegisterButton} title="Log In" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom:  50
    },
    logo: {
        alignItems: 'center',
        fontSize: 32,
        marginBottom: 20
    },
    form: {
        flexDirection: 'column',
    },
    input: {
        padding: 20,
        fontSize: 18
    },
});

export default Register