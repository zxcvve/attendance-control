import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import userStorage from "../../storage/userStorage";
import {setIsLoggedIn, setIsTeacher, setUser} from "../../redux/actions/userActions";
const LoaderScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        const loadData = async () => {
            try {
                const user = await userStorage.getUserLocally();
                if(user !== null){
                    dispatch(setUser(user))
                    dispatch(setIsTeacher(user.isTeacher));
                    dispatch(setIsLoggedIn(true));
                }else {
                    dispatch(setUser(null));
                    dispatch(setIsLoggedIn(false));
                    navigation.navigate("LoginScreen");
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };

        loadData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Загрузка...</Text>
        </View>
    );
};

export default LoaderScreen;
