import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import MainNavigation from "./MainNavigation";
import ProfileNavigation from "./ProfileNavigation";
import AnalyseNavigation from "./AnalyseNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../../screens/auth/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabNavigator = () => {
    const isLoading = true;
    return (
       isLoading ? <Tab.Navigator>
            <Tab.Screen
                name="Главная"
                component={MainNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={32} color={"#002fa7"} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Анализ"
                component={AnalyseNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="barschart" size={32} color={"#002fa7"} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Профиль"
                component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={32} color={"#002fa7"} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
           :
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={LoginScreen} options={{
                title: 'Главная',
                headerShown: false,
            }}/>
        </Stack.Navigator>
    );
};

export default TabNavigator;
