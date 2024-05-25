import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/nav/TabNavigator';
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
import store from "./src/redux/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                    translucent={true}
                />
                <TabNavigator/>
            </NavigationContainer>
        </Provider>
    );
}