import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentMain from "../../screens/main/StudentMain";
import AnalyseScreen from "../../screens/analyse/AnalyseScreen";

const Stack = createStackNavigator();

export default function AnalyseNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnalyseScreen" component={AnalyseScreen} options={{
                title: 'Главная',
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}