import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {setIsLoggedIn, setIsTeacher, setUser} from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";
import userStorage from "../../storage/userStorage";
import axios from "axios";

const LoginScreen = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch()

    async function handleLogin () {
        let user = null;
        await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            email: login,
            password: password
          }
          ).then(response => {
            if(response.status === 200){
                user = response.data
            }

          }).catch(error => {
            console.log(error)

        })
        const isTeacher = user.role === "Преподаватель";
        if(user){
            dispatch(setIsLoggedIn(true));
            dispatch(setIsTeacher(isTeacher));
            //dispatch(setIsTeacher(false));
            dispatch(setUser(user));
            userStorage.setUserLocally(user).then();
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Авторизация</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setLogin(text)}
                value={login}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#002fa7',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;