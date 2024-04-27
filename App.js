import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/main/MainScreen';
import GroupList from './src/screens/main/GroupList';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Авторизация' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={
              {
                title: 'Выбор предмета',
                headerLeft: null,
              }
          }/>
            <Stack.Screen name="GroupList" component={GroupList} options={{title: 'Список предметов',}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}