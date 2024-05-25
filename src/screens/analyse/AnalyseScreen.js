import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';
import { Picker } from '@react-native-picker/picker';
import { analData, fakeTeacherLessons, fakeTeacherLessonGroups } from '../../fakeData';

const AnalyseScreen = () => {
    const [selectedLesson, setSelectedLesson] = useState(fakeTeacherLessons[0].title);
    const [selectedGroup, setSelectedGroup] = useState(fakeTeacherLessonGroups[0]);
    const [attendanceData, setAttendanceData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [dates, setDates] = useState([]);
    const [headWidth, setHeadWidth] = useState([]);
    const [cellWidth, setCellWidth] = useState([]);

    const getCellWidth = (datesList) => {
        let head = [145];
        let cell = [];

        datesList.forEach(() => {
            head.push(50);
            cell.push(50);
        });

        setHeadWidth(head);
        setCellWidth(cell);
    };

    useEffect(() => {
        if (analData) {
            const users = [];
            const dates = [];
            const initData = [];

            analData.forEach((entry) => {
                dates.push(entry.date);
                entry.studentsList.forEach((student, index) => {
                    if (!users[index]) {
                        users.push(student.name);
                    }
                    if (!initData[index]) {
                        initData[index] = [];
                    }
                    initData[index].push(student.isVisited ? '✓' : 'x');
                });
            });

            getCellWidth(dates);
            setUsersData(users);
            setAttendanceData(initData);
            setDates(dates);
        }
    }, []);

    const renderTable = () => (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row
                        data={["", ...dates]}
                        widthArr={headWidth}
                        style={styles.head}
                        textStyle={styles.text}
                    />
                    <TableWrapper style={styles.wrapper}>
                        <Col
                            data={usersData}
                            style={styles.title}
                            heightArr={Array(usersData.length).fill(50)}
                            textStyle={styles.text}
                        />
                        <Rows
                            data={attendanceData}
                            widthArr={cellWidth}
                            style={styles.row}
                            textStyle={styles.text}
                        />
                    </TableWrapper>
                </Table>
            </View>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.dataWrapper}>
                <Text style={styles.headText}>{"Выберите группу и предмет: "}</Text>
                <View style={styles.picker}>
                    <Text> Предмет: </Text>
                    <Picker
                        selectedValue={selectedLesson}
                        style={{ height: 40, width: 180 }}
                        onValueChange={(itemValue) => setSelectedLesson(itemValue)}
                    >
                        {fakeTeacherLessons.map((lesson) => (
                            <Picker.Item key={lesson.lessonId} label={lesson.title} value={lesson.title} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.picker}>
                    <Text> Группа: </Text>
                    <Picker
                        selectedValue={selectedGroup}
                        style={{ height: 40, width: 180 }}
                        onValueChange={(itemValue) => setSelectedGroup(itemValue)}
                    >
                        {fakeTeacherLessonGroups.map((group) => (
                            <Picker.Item key={group} label={group.toString()} value={group} />
                        ))}
                    </Picker>
                </View>
                {renderTable()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    tableContainer: {
        flex: 1,
        marginTop: 10,
    },
    cell: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'grey',
    },
    lastCell: {
        borderRightWidth: 0,
    },
    picker: {
        marginTop: -5,
        marginBottom: -10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataWrapper: {
        marginTop: 0,
    },
    container: {
        flex: 1,
        padding: 4,
        paddingTop: 30,
        backgroundColor: '#fff',
        marginTop: 20, // Added marginTop for top margin
    },
    head: {
        height: 50,
        backgroundColor: '#f1f8ff',
    },
    wrapper: {
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa',
    },
    row: {
        height: 50,
    },
    text: {
        textAlign: 'center',
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AnalyseScreen;
