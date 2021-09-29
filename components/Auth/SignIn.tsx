import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import App from '../../App'
import ChatsList from './components/ChatsList/ChatsList'
import HeaderChats from './components/headerChats/HeaderChats'
import NavigatorMenu from './navigation/index'
import { State } from './Redux'
import { useAuth } from './useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import "react-native-gesture-handler"


const SignIn = ({navigation, route}) => {
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('') 
    const [wrongStatus, setWrongStatus] = useState(true)

    const {isAuth, setIsAuth} = useAuth()

    const handlerRegisterButton = () => {
        if(loginText && passwordText) Register(loginText, passwordText)
    }

    const Register = async (login:string, password:string) => {
        if(login === "ibragimlol" && password === "ibra3007") {
            await AsyncStorage.setItem('token', 'oskdksdfpo')
            setIsAuth(true)
        }
        setWrongStatus(true)
    }

    return (
        <View style={styles.container} >
            <View style={styles.logo}>
                <Text style={styles.logo}>Chat</Text>
            </View>
            <View style={styles.form}>
                <TextInput 
                    value={loginText} 
                    onChangeText={(text) => setLoginText(text)} 
                    style={styles.input} 
                    placeholder="Enter your login" 
                />
                <TextInput 
                    value={passwordText} 
                    onChangeText={(text) => setPasswordText(text)} 
                    secureTextEntry={true}style={styles.input} 
                    placeholder="Enter your password" 
                />
                <Button onPress={handlerRegisterButton} title="Log In" />
                <Button onPress={() => navigation.navigate('Register')} title="Register" />
                {wrongStatus ? null : <Text>Wrong!</Text>}
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

export default SignIn