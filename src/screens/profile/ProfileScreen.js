import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../../assets/stock-user-icon.png')}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.section}>
                <AntDesign name="user" size={24} color={"black"}/>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.buttonText}>Иван Иванов</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>

            <View style={styles.section}>
                <AntDesign name="bells" size={24} color={"black"}/>
                <TouchableOpacity  style={styles.item}>
                    <Text style={styles.buttonText}>Уведомления</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>

            <View style={styles.section}>
                <AntDesign name="tool" size={24} color={"black"}/>
                <TouchableOpacity  style={styles.item}>
                    <Text style={styles.buttonText}>Выбор языка</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>

            <View style={styles.section}>
                <AntDesign name="logout" size={24} color={"black"}/>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.buttonText}>Выход</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 40,
    },
    userNameContainer:{
        alignItems: 'center',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginBottom: 10,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "black"
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default ProfileScreen;
