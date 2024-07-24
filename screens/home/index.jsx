import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home";
import Categories from './categories';
import AccountMain from '../account/index';

const HomeScreen = ({ navigation }) => {
    const Tab = createBottomTabNavigator();

    const handleCategoryPress = (id) => {
        navigation.navigate("ParticularCategory", { id })
    }

    const handleServicePress = (id) => {
        navigation.navigate("Service", { id })
    }

    const handleIndividualServicePress = (id) => {
        navigation.navigate("IndividualService", { id })
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name == "Account") {
                        iconName = focused ? "person" : "person-outline";
                    } else if (route.name == "Categories") {
                        iconName = focused ? "grid" : "grid-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#292363",
                tabBarInactiveTintColor: "#292D3280",
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" children={() => <Home handleServicePress={handleServicePress} handleCategoryPress={handleCategoryPress} handleIndividualServicePress={handleIndividualServicePress} />} />
            <Tab.Screen name="Categories" children={() => <Categories handleServicePress={handleServicePress} handleCategoryPress={handleCategoryPress} handleIndividualServicePress={handleIndividualServicePress} />} />
            <Tab.Screen name="Account" component={AccountMain} />
        </Tab.Navigator>
    )
}

export default HomeScreen