import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import { customerDetails } from '../screens/account/data'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const EditProfile = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn}>
                <Ionicons name="arrow-back" size={30} color="#292363" onPress={onBackPress} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <AntDesign name="edit" size={24} color="#000" />
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <View style={styles.editOptions}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={customerDetails.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={customerDetails.mobile}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={customerDetails.address}
                    />
                </View>
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
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
    inputContainer: {
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        borderRadius: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    input: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
    },
});

export default EditProfile