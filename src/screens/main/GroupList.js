import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fakeStudents } from '../../fakeData';

const GroupList = () => {
    const [selectedGroup, setSelectedGroup] = useState(fakeStudents[0]);
    const [selectedStudentsIds, setSelectedStudentsIds] = useState(() => {
        const initialSelectedStudents = {};
        fakeStudents.forEach(group => {
            initialSelectedStudents[group.group] = group.studentsList
                .filter(student => student.isVisited)
                .map((_, index) => index); // Using index instead of studentId
        });
        return initialSelectedStudents;
    });

    const toggleStudentSelection = (groupId, studentIndex) => { // Changed studentId to studentIndex
        const groupSelectedStudents = selectedStudentsIds[groupId] || [];

        const isSelected = groupSelectedStudents.includes(studentIndex);

        if (isSelected) {
            setSelectedStudentsIds({
                ...selectedStudentsIds,
                [groupId]: groupSelectedStudents.filter(id => id !== studentIndex)
            });
        } else {
            setSelectedStudentsIds({
                ...selectedStudentsIds,
                [groupId]: [...groupSelectedStudents, studentIndex]
            });
        }
    };

    const renderStudentItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => toggleStudentSelection(selectedGroup.group, index)}>
            <View style={styles.item}>
                <View style={styles.personText}>
                    <Text style={styles.itemElementText}>{index + 1}) </Text>
                    <Text style={styles.itemElementText}>{item.name}</Text>
                </View>
                <View style={styles.button}>
                    {(selectedStudentsIds[selectedGroup.group] || []).includes(index) && (
                        <View style={{ width: 10, height: 10, backgroundColor: 'black', borderRadius: 3 }} />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderGroupItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedGroup(item)}>
            <View style={[styles.groupItem, selectedGroup.group === item.group && styles.selectedGroup]}>
                <Text style={styles.groupItemText}>Группа {item.group}</Text>
            </View>
        </TouchableOpacity>
    );

    const saveData = () => {
        console.log('Data saved');
    };

    return (
        <View style={styles.container}>
            <View style={styles.groupsContainer}>
                <FlatList
                    data={fakeStudents}
                    renderItem={renderGroupItem}
                    keyExtractor={(item) => item.group.toString()}
                    horizontal
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={selectedGroup.studentsList}
                    renderItem={renderStudentItem}
                    keyExtractor={(item) => item.studentId.toString()}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={saveData}>
                <Text style={styles.saveButtonText}>Сохранить</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    groupsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    groupText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listContainer: {
        flex: 1,
    },
    itemElementText: {
        fontSize: 16,
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
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
    groupItem: {
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
    },
    selectedGroup: {
        backgroundColor: '#00cfff',
    },
    groupItemText: {
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#002fa7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default GroupList;
