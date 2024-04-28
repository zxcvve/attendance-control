import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { lessonsFakeData } from "../../fakeData";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigation = useNavigation();

    const changeDate = useCallback((direction) => {
        const currentDate = new Date(selectedDate);
        const newDate = new Date(direction === 'left' ? currentDate.setDate(currentDate.getDate() - 1) : currentDate.setDate(currentDate.getDate() + 1));
        setSelectedDate(newDate);
    }, [selectedDate]);

    const lessonsPressHandler = useCallback(() => {
        navigation.navigate('GroupList');
    }, [navigation]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={lessonsPressHandler}>
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text>[{item.number}]</Text>
                </View>
                <Text style={styles.titleText}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    const ruDate = selectedDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    const dayOfWeek = selectedDate.toLocaleDateString('ru-RU', { weekday: 'long' });

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <TouchableOpacity onPress={() => changeDate('left')}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.dayContainer}>
                    <Text style={styles.selectedDate}>{ruDate}</Text>
                    <Text style={styles.day}>{dayOfWeek}</Text>
                </View>
                <TouchableOpacity onPress={() => changeDate('right')}>
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={lessonsFakeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    selectedDate: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    day: {
        fontSize: 16,
        color: 'gray',
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dayContainer: {
        alignItems: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
});

export default HomeScreen;
