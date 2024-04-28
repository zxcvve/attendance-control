import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../../screens/profile/ProfileScreen";
import StudentMain from "../../screens/main/StudentMain";
import LoginScreen from "../../screens/auth/LoginScreen";


const Stack = createStackNavigator();

export default function ProfileNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
                title: 'Главная',
                headerShown: false,
            }}/>
        </Stack.Navigator>
    );
}