import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { lessonsFakeData } from "../../fakeData";
import { AntDesign } from '@expo/vector-icons'; // Импортируем иконки из пакета Ant Design
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigation = useNavigation();

    const changeDate = (direction) => {
        const currentDate = new Date(selectedDate);
        let newDate;

        if (direction === 'left') {
            newDate = new Date(currentDate.setDate(currentDate.getDate() - 1)); // Уменьшаем дату на 1 день
        } else {
            newDate = new Date(currentDate.setDate(currentDate.getDate() + 1)); // Увеличиваем дату на 1 день
        }

        setSelectedDate(newDate);
    };

    const lessonsPressHandler = () => {
        navigation.navigate('GroupList');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={lessonsPressHandler}>
            <View style={styles.itemContainer}>
                <View>
                    <Text>{item.title}</Text>
                    <Text>[{item.number}]</Text>
                </View>
                <Text>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const ruDate = selectedDate.toLocaleDateString('ru-RU', options);

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <TouchableOpacity onPress={() => changeDate('left')}>
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.dayContainer}>
                    <Text style={styles.selectedDate}>{ruDate}</Text>
                    <Text style={styles.day}>{selectedDate.toLocaleDateString('ru-RU', { weekday: 'long' })}</Text>
                </View>
                <TouchableOpacity onPress={() => changeDate('right')}>
                    <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={lessonsFakeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    day: {
        fontSize: 14,
        color: 'gray',
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
