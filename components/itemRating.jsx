import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IonIcons from "react-native-vector-icons/Ionicons";
import isTablet from '../hooks/isTablet';

const ItemRating = ({ rating, type }) => {
    const floorRating = Math.floor(rating);

    return (
        <View style={styles.ratingContainer}>
            {Array(floorRating).fill().map((_, index) => (
                <IonIcons key={index} name="star" size={type === "service" ? 22 : 15} color="#FFC107" />
            ))}
            {Array(5 - floorRating).fill().map((_, index) => (
                <IonIcons key={index} name="star-outline" size={type === "service" ? 22 : 15} color="#FFC107" />
            ))}
            <Text style={type === "service" ? styles.serviceRating : styles.rating}>{rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    rating: {
        fontSize: isTablet() ? 14 : 10,
        fontWeight: '400',
        marginLeft: 5,
    },
    serviceRating: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        marginLeft: 5,
    },
})

export default ItemRating