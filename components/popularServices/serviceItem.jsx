import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import ItemRating from '../itemRating'

const ServiceItem = ({ service, handleViewPress, handleAddPress }) => {
    return (
        <View style={styles.serviceItem}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.serviceTitle}>{service.title}</Text>
                    <View style={styles.ratingContainer}>
                        <ItemRating rating={service.rating} />
                        <Text style={styles.reviews}>({service.reviews} Reviews)</Text>
                    </View>
                    <View style={styles.servicePriceContainer}>
                        <Text style={styles.price}>{service.price}</Text>
                        <Text style={styles.duration}>{`\u2022 ${service.duration}`}</Text>
                    </View>
                    <TouchableOpacity style={styles.offerContainer}>
                        <View style={styles.card}>
                            <Ionicons name="paper-plane" size={20} color="red" />
                            <Text style={styles.offerTitle}>₹100 OFF</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Image source={service.image} style={styles.serviceImage} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.otherInfo}>{service.otherInfo}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.addBtn} onPress={() => handleAddPress()}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBtn} onPress={() => handleViewPress(service.id)}>
                        <Text style={styles.viewBtnText}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ServiceItem