import React from 'react'
import { useState } from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BookingDetails from '../bookingDetails';
import styles from './styles'

import CancellationPolicy from '../cancellationPolicy';
import { bookingData as data } from './data';

const ServiceBooking = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }

    const [rating, setRating] = useState(0);

    const handleRatingPress = (value) => {
        setRating(value);
    }

    const handleReschedulePress = () => {
        navigation.navigate("DateAndTime")
    }

    const handleCancelPress = () => {
        navigation.navigate("BookingCancellation")
    }

    const handlePayNowPress = () => {
        navigation.navigate("Payments")
    }

    const handleWriteReviewPress = () => {
        console.log("Write a review")
    }

    const professionalStatus = "Assigned"
    const serviceStatus = "Show OTP"
    const OTP = "1234"

    const serviceStatusText = serviceStatus == "Show OTP" ? "Share start service OTP" : "Rate Service"

    return (
        <ScrollView style={styles.container}>
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
                <View style={styles.rightConfirmationContainer}>
                    <View style={styles.confirmationTitle}>
                        <AntDesign name="checkcircle" size={30} color="#292363" />
                        <Text style={styles.title}>Booking Accepted</Text>
                    </View>
                    <Text style={styles.subTitle}>A beautician will be assigned 60 minutes before booking time</Text>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnContent}>View Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.leftConfirmationContainer}>
                    <Image source={require('../../assets/images/Profile_Image.jpg')} style={styles.image} />
                </View>
            </View>
            <View style={styles.serviceStatus}>
                <Text style={styles.serviceStatusTitle}>Service Status:</Text>
                {
                    professionalStatus === "Assigned" ?
                        <Text style={styles.serviceStatusText}>Assigning Professional</Text> :
                        <Text style={styles.serviceStatusText}>{serviceStatusText}</Text>
                }
            </View>
            <View>
                {
                    serviceStatus === "Show OTP" &&
                    <View style={styles.serviceStatus}>
                        <Text style={styles.serviceStatusTitle}>Share start service OTP:</Text>
                        {OTP.split('').map((item, index) => {
                            return (
                                <View style={styles.OtpContainer} key={index}>
                                    <Text style={styles.OtpContent}>{item}</Text>
                                </View>
                            )
                        })}
                    </View>
                }
                {
                    serviceStatus === "Rate Service" &&
                    <View style={styles.reviewContainer}>
                        <View style={styles.ratingContainer}>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <TouchableOpacity
                                    key={value}
                                    style={[styles.star, value <= rating && styles.selectedStar]}
                                    onPress={() => handleRatingPress(value)}
                                >
                                    <Ionicons name="star" size={24} color={value <= rating ? "#FFD700" : "#C4C4C4"} />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TouchableOpacity style={styles.writeReviewBtn} onPress={handleWriteReviewPress}>
                            <Text style={styles.writeReviewText}>Write a Review</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <BookingDetails data={data} handlePayNowPress={handlePayNowPress} />
            <View style={styles.optionBtnContainer}>
                <TouchableOpacity style={styles.btnContainer} onPress={handleReschedulePress}>
                    <Text style={styles.btnContent}>Reschedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtnContainer} onPress={handleCancelPress}>
                    <Text style={styles.cancelBtnContent}>Cancel Booking</Text>
                </TouchableOpacity>
            </View>
            <CancellationPolicy />
        </ScrollView>
    )
}

export default ServiceBooking
