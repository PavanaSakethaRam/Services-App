import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ItemRating from './itemRating'

const ServiceWithDetails = ({ title, data, handleServicePress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.serviceContainer}>
                {
                    data.map((item, index) => (
                        <TouchableOpacity key={index} onPress={handleServicePress ? () => handleServicePress(item.id) : null}>
                            <View style={styles.listContainer}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <ItemRating rating={item.rating} />
                                <Text style={styles.itemTitle}>{item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    listContainer: {
        width: 105,
        height: 195,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    serviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        gap: 5,
        justifyContent: 'space-between',
    },
    image: {
        width: "100%",
        height: 98,
        marginBottom: 12,
        borderRadius: 10,
    },
    itemTitle: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 5,
    },
    itemRating: {
        fontSize: 10,
        fontWeight: '400',
    },
})

export default ServiceWithDetails