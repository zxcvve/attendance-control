import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/nav/TabNavigator';
import {StatusBar} from "react-native";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
                translucent={true}
            />
            <TabNavigator/>
        </NavigationContainer>
    );
}