import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import isTablet from '../hooks/isTablet'

const Offers = ({ data }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Ionicons name="paper-plane" size={30} color="red" />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>Get Plus Now</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 20,
    },
    card: {
        width: isTablet() ? 300 : 260,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontSize: isTablet() ? 14 : 10,
        fontWeight: '600'
    },
    titleContainer: {
    },
    description: {
        fontSize: isTablet() ? 12 : 8,
        fontWeight: '600',
        color: '#000'
    }
})

export default Offers