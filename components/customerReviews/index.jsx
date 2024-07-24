import React from 'react'
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const CustomerReviews = ({ data, rating, reviews }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Customer Reviews</Text>
            <View style={styles.sliderContainer}>
                <Ionicons name="star" size={40} color="#FFD700" />
                <View>
                    <Text style={styles.rating}>{rating}</Text>
                    <Text style={styles.reviews}>{reviews} Reviews</Text>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                {
                    data.map((item) => {
                        return (
                            <View key={item.id} style={styles.reviewContainer}>
                                <View style={styles.reviewHeader}>
                                    <View style={styles.leftHeader}>
                                        <Image source={item.profileImage} style={styles.reviewImage} />
                                        <View>
                                            <Text style={styles.reviewName}>{item.name}</Text>
                                            <Text style={styles.reviewDate}>{item.date}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rightHeader}>
                                        <Ionicons name="star" size={16} color="#000" />
                                        <Text style={styles.reviewRating}>{item.rating}</Text>
                                    </View>
                                </View>
                                <Text style={styles.review}>{item.review}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default CustomerReviews