import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fakeStudents } from '../../fakeData';

const GroupList = () => {
    const [selectedGroup, setSelectedGroup] = useState(fakeStudents[0]);
    const [selectedStudentsIds, setSelectedStudentsIds] = useState({});

    const toggleStudentSelection = (groupId, studentId) => {
        const groupSelectedStudents = selectedStudentsIds[groupId] || [];

        const isSelected = groupSelectedStudents.includes(studentId);

        if (isSelected) {
            setSelectedStudentsIds({
                ...selectedStudentsIds,
                [groupId]: groupSelectedStudents.filter(id => id !== studentId)
            });
        } else {
            setSelectedStudentsIds({
                ...selectedStudentsIds,
                [groupId]: [...groupSelectedStudents, studentId]
            });
        }
    };

    const renderStudentItem = ({ item }) => (
        <TouchableOpacity onPress={() => toggleStudentSelection(selectedGroup.group, item.studentId)}>
            <View style={styles.item}>
                <View style={styles.personText}>
                    <Text style={styles.itemElementText}>{item.studentId}) </Text>
                    <Text style={styles.itemElementText}>{item.name}</Text>
                </View>
                <View style={styles.button}>
                    {(selectedStudentsIds[selectedGroup.group] || []).includes(item.studentId) && (
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
            <Text style={styles.groupText}>Группа {selectedGroup.group}</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={selectedGroup.studentsList}
                    renderItem={renderStudentItem}
                    keyExtractor={(item) => item.studentId.toString()}
                />
            </View>
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
        marginBottom: 20,
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
});

export default GroupList;
