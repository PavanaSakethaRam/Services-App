import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BookingDetails from '../bookingDetails';
import isTablet from '../../hooks/isTablet';

import { bookingData as data } from './data';

const BookingCancellation = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn}>
                <Ionicons name="arrow-back" size={30} color="#292363" onPress={onBackPress} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{data.serviceName}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{data.date}</Text>
                </View>
            </View>
            <View style={styles.confirmationContainer}>
                <AntDesign name="checkcircle" size={30} color="#292363" />
                <Text style={styles.title}>Booking has been Cancelled</Text>
            </View>
            <BookingDetails data={data} type="cancellation" />
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
        paddingBottom: 20,
        gap: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: isTablet() ? 26 : 22,
        fontWeight: '600',
        color: '#000',
    },
    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    dateText: {
        fontSize: isTablet() ? 16 : 14,
        fontWeight: '400',
        color: '#000',
    },
    confirmationContainer: {
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
});

export default BookingCancellation