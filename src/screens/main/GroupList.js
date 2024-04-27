import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fakeStudents } from '../../fakeData';

const GroupList = () => {
    const [selectedStudentsIds, setSelectedStudentsIds] = useState([]);

    const toggleStudentSelection = (studentId) => {
        const isSelected = selectedStudentsIds.includes(studentId);

        if (isSelected) {
            setSelectedStudentsIds(selectedStudentsIds.filter(id => id !== studentId));
        } else {
            setSelectedStudentsIds([...selectedStudentsIds, studentId]);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => toggleStudentSelection(item.id)}>
            <View style={styles.item}>
                <View style={styles.personText}>
                    <Text>{item.id}) </Text>
                    <Text>{item.name}</Text>
                </View>
                <View style={styles.button}>
                    {selectedStudentsIds.includes(item.id) && (
                        <View style={{ width: 10, height: 10, backgroundColor: 'black', borderRadius: 3 }} />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text>Группа 1095</Text>
            <FlatList
                data={fakeStudents}
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
        paddingTop: 20,
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        padding: 12,
        marginVertical: 8,
    },
    personText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
});

export default GroupList;
