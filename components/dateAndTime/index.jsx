import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles';

import { customerDetails as data } from './data';

const DateAndTime = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }

    const handleCheckoutPress = () => {
        navigation.navigate("Payments")
    }

    const handleChangeAddressPress = () => {
        navigation.navigate("AddAddress")
    }

    const dates = [{ id: 1, date: '09', day: 'Thu', }, { id: 2, date: '10', day: 'Fri', }, { id: 3, date: '12', day: 'Sun', },]
    const times = ["08:30  AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "08:30  AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"]
    return (
        <ScrollView style={styles.container}>
            <Ionicons name="arrow-back-outline" size={25} color="#000" style={styles.icon} onPress={onBackPress} />
            <View style={styles.customerDetailsContainer}>
                <View style={styles.customerDetails}>
                    <View style={styles.customerDetailsHeader}>
                        <Ionicons name="home-outline" size={25} color="#292363" />
                        <Text style={styles.customerName}>{data.name}</Text>
                    </View>
                    <Text style={styles.customerAddress}>{data.address}</Text>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleChangeAddressPress}>
                    <Text style={styles.btnContent}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.title}>When should the professional arrive?</Text>
                <Text style={styles.subTitle}>Your service will take approx. 50 mins</Text>
                <View style={styles.dateList}>
                    {
                        dates.map((item, index) => (
                            <View key={index} style={styles.dateItem}>
                                <Text style={styles.day}>{item.day}</Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>NOTE: Free Cancellation till 3hours before the booked slot, post that ₹500 chargeable</Text>
                </View>
                <View style={styles.timeList}>
                    {
                        times.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.timeItem}>
                                <Text style={styles.time}>{item}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <TouchableOpacity style={styles.proceedBtnContainer} onPress={handleCheckoutPress}>
                <Text style={styles.proceedBtnContent}>Proceed To Checkout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DateAndTime