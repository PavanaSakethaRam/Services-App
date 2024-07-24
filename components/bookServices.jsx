import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import isTablet from '../hooks/isTablet'

const Index = ({ categoryData, title, handleCategoryPress }) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={styles.serviceContainer}>
                {
                    categoryData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={handleCategoryPress ? () => handleCategoryPress(item.id) : null}>
                            <View style={styles.serviceItem}>
                                <Image source={item.image} style={styles.serviceImage} />
                                <Text style={styles.serviceTitle}>{item.title}</Text>
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
        width: '100%',
        paddingLeft: 20,
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        paddingTop: 20,
        fontWeight: '600',
        color: '#000',
    },
    serviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        paddingRight: 20,
        gap: 10,
    },
    serviceItem: {
        alignItems: 'center',
        marginTop: 20,
        width: isTablet() ? 112 : 102,
        height: isTablet() ? 155 : 131,
        borderRadius: 10,
        backgroundColor: '#fff',
        gap: 10,
    },
    serviceImage: {
        width: "100%",
        height: isTablet() ? 110 : 94,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
})


export default Index