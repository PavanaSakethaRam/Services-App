import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import isTablet from '../hooks/isTablet'

const TipsList = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>After Care Tips</Text>
            </View>
            {
                data.map((item) => (
                    <View style={styles.listItem} key={item.id}>
                        {
                            item.isDone ?
                                <Feather name="check-circle" size={22} color="#000" />
                                : <Feather name="x-circle" size={22} color="#000" />
                        }
                        <Text style={styles.listItemText}>{item.description}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "#fff"
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    listItemText: {
        fontSize: isTablet() ? 18 : 14,
        color: '#000',
        width: '95%',
        opacity: 0.7,
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
    },
    titleContainer: {
        marginBottom: 20,
    },
})

export default TipsList