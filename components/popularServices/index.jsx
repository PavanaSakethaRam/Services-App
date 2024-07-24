import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import ServiceItem from './serviceItem'

const PopularServices = ({ data, handleViewPress, handleLoadMorePress, sliceIndex, handleAddPress }) => {

    return (
        <View >
            <View style={styles.container}>
                {
                    data.slice(0, sliceIndex).map((item, index) => (
                        <View style={styles.serviceContainer} key={index}>
                            <Text style={styles.title}>{item.title}</Text>
                            {
                                item.services.map((service, index) => (
                                    <View style={styles.eachServiceContainer} key={index}>
                                        <ServiceItem service={service} key={index} handleViewPress={handleViewPress} handleAddPress={handleAddPress} />
                                    </View>
                                ))
                            }
                            <View style={styles.divider}></View>
                        </View>
                    ))
                }
            </View>
            <View style={styles.loadMoreBtnContainer}>
                <TouchableOpacity style={styles.loadMoreBtn} onPress={handleLoadMorePress}>
                    <Text style={styles.loadMoreBtnText}>Load More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PopularServices