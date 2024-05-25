import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import MainNavigation from "./MainNavigation";
import ProfileNavigation from "./ProfileNavigation";
import AnalyseNavigation from "./AnalyseNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/auth/LoginScreen";
import { useSelector } from "react-redux";
import LoaderScreen from "../../screens/auth/loaderScreen";
import StudentMain from "../../screens/main/StudentMain";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const isTeacher = useSelector((state) => state.user.isTeacher);

    if (!isLoggedIn) {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="LoaderScreen"
                    component={LoaderScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    }

    if (isTeacher) {
        return (
            <Tab.Navigator>
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
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Главная"
                component={StudentMain}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={32} color={"#002fa7"} />
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
    );
};

export default TabNavigator;
