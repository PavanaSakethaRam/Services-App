import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import ItemRating from '../itemRating'

const ServiceItem = ({ service, handleAddToCart }) => {
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
                    <View style={styles.descriptionList}>
                        {
                            service.description.map((item, index) => (
                                <View key={index} style={styles.descriptionItem}>
                                    <Text style={styles.descriptionText}>{`\u2022 ${item}`}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <Image source={service.image} style={styles.serviceImage} />
            </View>
            <View style={styles.bottomContainer}>
                {
                    service.otherInfo && <Text style={styles.otherInfo}>{service.otherInfo}</Text>
                }
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewBtn}>
                        <Text style={styles.viewBtnText}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ServiceItem