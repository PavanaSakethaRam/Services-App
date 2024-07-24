import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from './styles'

const BookingDetails = ({ data, type, handlePayNowPress }) => {
  return (
    <View style={styles.bookingDetailsContainer}>
      <View style={styles.bookingDetailsHeader}>
        <Text style={styles.bookingDetailsTitle}>Booking Details</Text>
        {
          type === 'cancellation' ?
            <TouchableOpacity style={styles.btnContainer} onPress={() => { console.log("View Btn Pressed") }}>
              <Text style={styles.btnContent}>View Details</Text>
            </TouchableOpacity> : null
        }
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.amountLeftContainer}>
          <Ionicons name="card-outline" size={22} color="#000" />
          <Text style={styles.amountText}>Amount to pay:</Text>
          <Text style={styles.amountValue}>{data.amount}</Text>
        </View>
        {
          type === 'cancellation' ?
            null :
            <TouchableOpacity style={styles.btnContainer} onPress={handlePayNowPress}>
              <Text style={styles.btnContent}>Pay Now</Text>
            </TouchableOpacity>
        }
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.address}>
          <Ionicons name="location-outline" size={22} color="#000" />
          <View style={styles.addressLeftContainer}>
            <Text style={styles.addressTitle}>{data.customerName}</Text>
            <Text style={styles.addressText}>{data.customerAddress}</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.date}>
          <Ionicons name="calendar-outline" size={22} color="#000" />
          <Text style={styles.dateText}>{data.date}</Text>
        </View>
      </View>
    </View>
  )
}

export default BookingDetails