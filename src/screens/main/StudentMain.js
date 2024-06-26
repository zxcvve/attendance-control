import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import {fakeStudents} from "../../fakeData";

const StudentMain = () => {
    const [code, setCode] = useState('');

    const handleConfirmation = () => {
        if (code === '1234') {

            showMessage({
                message: "Подтверждение прошло успешно!",
                type: "success",
                position: "top",
                floating: true,
                duration: 3000,
                style: { marginTop: 60 }
            });
        } else {
            showMessage({
                message: "Такой предмет не найден :(",
                type: "danger",
                position: "top",
                floating: true,
                duration: 3000,
                style: { marginTop: 60 }
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Введите код</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите код предмета"
                onChangeText={text => setCode(text)}
                value={code}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleConfirmation}>
                <Text style={styles.buttonText}>Подтвердить</Text>
            </TouchableOpacity>

            <FlashMessage position="top" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 60,
        paddingTop: 20, // Added paddingTop for spacing from the top
        padding: 20, // Added padding for all sides
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#002fa7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
    },
});

export default StudentMain;
