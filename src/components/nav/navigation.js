import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import HomeScreen from '../../screens/main/MainScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Авторизация' }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}