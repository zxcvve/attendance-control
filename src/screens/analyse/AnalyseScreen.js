import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row, Rows, TableWrapper, Col, Cell, Cols} from 'react-native-table-component';
import { lessonsFakeData, fakeStudents, fakeDates } from '../../fakeData';
import {Picker} from "@react-native-picker/picker";

const AnalyseScreen = () => {
    const [selectedLesson, setSelectedLesson] = useState("Информатика");
    const [selectedGroup, setSelectedGroup] = useState("1092");
    const [attendanceData, setAttendanceData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const headWidth = [145, 50,50,50,50,50,50,50]
    const cellWidth = [0,50,50,50,50,50,50,50]

    useEffect(() => {
        if (lessonsFakeData && fakeStudents) {
            const initData = [];
            const users = [];
            fakeStudents.forEach(student => {
                users.push(student.name);
            });

            for (let i = 0; i < fakeStudents.length; i += 1) {
                const rowData = [];
                for (let j = 0; j < fakeDates.length; j += 1) {
                    rowData.push(`x`);
                }
                initData.push(rowData);
            }

            setUsersData(users);
            setAttendanceData(initData);
        }
    }, []);


    const renderTable = () => (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1 }}>
                    <Row
                        data={["", ...fakeDates]}
                        widthArr={headWidth}
                        style={[styles.head]}
                        textStyle={styles.text}
                    />
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={[...usersData]}
                                style={[styles.title]}
                                heightArr={[50]}
                                textStyle={styles.text}
                            />
                            <Rows
                                data={attendanceData}
                                widthArr={cellWidth}
                                style={[styles.row]}
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
                        style={{ height: 40, width: 180}}
                        onValueChange={(itemValue, itemIndex) => setSelectedLesson(itemValue)}
                    >
                        <Picker.Item label="Математика" value="Математика" />
                        <Picker.Item label="Биология" value="Биология" />
                        <Picker.Item label="Информатика" value="Информатика" />
                    </Picker>
                </View>

                <View style={styles.picker}>
                    <Text> Группа: </Text>
                    <Picker
                        selectedValue={selectedGroup}
                        style={{ height: 40, width: 180}}
                        onValueChange={(itemValue, itemIndex) => setSelectedGroup(itemValue)}
                    >
                        <Picker.Item label="1095" value="1095" />
                        <Picker.Item label="1092" value="1092" />
                        <Picker.Item label="1091" value="1091" />
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
        borderRightWidth: 1, // Добавляем линии справа
        borderLeftWidth: 1, // Добавляем линии слева
        borderColor: 'grey', // Цвет линий между ячейками
    },
    lastCell: {
        borderRightWidth: 0, // Убираем правую границу для последней ячейки
    },
    picker:{
        marginTop:-5,
        marginBottom:-10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataWrapper: {
        marginTop: 0
    },
    container: {
        flex: 1,
        padding: 4,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        height: 50,
        backgroundColor: '#f1f8ff'
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 50
    },
    text: {
        textAlign: 'center'
    },
    headText: {
        fontSize:20,
        fontWeight:"bold",
    }
});

export default AnalyseScreen;
