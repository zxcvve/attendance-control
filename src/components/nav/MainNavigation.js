import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import HomeScreen from '../../screens/main/MainScreen';
import GroupList from "../../screens/main/GroupList";

const Stack = createStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={
                {
                    title: 'Выбор предмета',
                    headerLeft: null,
                }
            }/>
            <Stack.Screen name="GroupList" component={GroupList} options={{title: 'Список предметов',}}/>
        </Stack.Navigator>
    );
}