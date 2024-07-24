import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from './account';
import EditProfile from '../../components/editProfile';
import EditLanguage from '../../components/editLanguage';


const AccountMain = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="AccountMain"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AccountMain" component={Account} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditLanguage" component={EditLanguage} />
        </Stack.Navigator>
    )
}

export default AccountMain