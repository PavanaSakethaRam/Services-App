import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import isTablet from '../hooks/isTablet'

const UnorderedList = ({ title, data }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {data.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.listItemText}>{`\u2022 ${item}`}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    listItemText: {
        fontSize: isTablet() ? 18 : 14,
        marginLeft: 10,
    },
})

export default UnorderedList