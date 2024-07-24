import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import isTablet from '../../hooks/isTablet'

const WorkingSteps = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>How it works</Text>
            <View style={styles.itemContainer}>
                {
                    data.map((item) => (
                        <View key={item.id} style={styles.descriptionItem}>
                            <View style={styles.titleContainer}>
                                <View style={styles.bullet} >
                                    <Text style={styles.bulletText}>{item.id}</Text>
                                </View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionText}>{item.description}</Text>
                            </View>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 40,
    },
    heading: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '700',
        color: '#000',
    },
    itemContainer: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    descriptionItem: {
        marginBottom: 30,
        width: '47%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
        width: '80%',
        height: 50,
    },
    bullet: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#EBE9E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bulletText: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '700',
    },
    title: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '700',
    },
    descriptionText: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: '#000',
        opacity: 0.6,
    },
    image: {
        width: '100%',
        height: 150,
        marginTop: 30,
        borderRadius: 10,
    },
    descriptionContainer: {
        height: 90,
    },
});

export default WorkingSteps