import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { suggestedLanguages, otherLanguages } from '../screens/account/data'
import Ionicons from "react-native-vector-icons/Ionicons";

import LanguageSelection from './languageSelection';
import isTablet from '../hooks/isTablet';

const EditLanguage = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn}>
                <Ionicons name="arrow-back" size={isTablet() ? 40 : 30} color="#292363" onPress={onBackPress} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Ionicons name="language" size={isTablet() ? 40 : 26} color="#000" />
                <Text style={styles.title}>Language</Text>
            </View>
            <View style={styles.languageContainer}>
                <Text style={styles.languageTitle}>Suggested</Text>
                <LanguageSelection languages={suggestedLanguages} />
            </View>
            <View style={styles.languageContainer}>
                <Text style={styles.languageTitle}>Other</Text>
                <LanguageSelection languages={otherLanguages} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backBtn: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: isTablet() ? 30 : 24,
        fontWeight: "bold",
        marginLeft: 10,
    },
    editOptions: {
        marginTop: 20,
    },
    languageContainer: {
        marginTop: 30,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
    languageTitle: {
        fontSize: isTablet() ? 30 : 22,
        fontWeight: "bold",
    },
})

export default EditLanguage