import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

const ServiceCategories = ({ categoryData, start, end, handleCategoryPress }) => {
    const serviceItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
                <View style={styles.serviceItem} key={index}>
                    <Image source={item.image} style={styles.serviceImage} />
                    <Text style={styles.serviceTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={categoryData.slice(start, end)}
                horizontal
                renderItem={serviceItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.serviceContainer}
                windowSize={1}
            />
        </View>
    )
}

export default ServiceCategories