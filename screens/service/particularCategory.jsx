import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { offersData } from '../home/data';
import { particularCategory, popularServices } from './data';

import ItemRating from '../../components/itemRating';
import Offers from '../../components/offers';
import BookServices from '../../components/bookServices';
import PopularServices from '../../components/popularServices/index';
import isTablet from '../../hooks/isTablet';

const ParticularCategory = ({ route, navigation }) => {
    const { id } = route.params;
    const [sliceIndex, setSliceIndex] = React.useState(3);

    const handleViewPress = (id) => {
        navigation.navigate('IndividualService', { id });
    }

    const handleLoadMorePress = () => {
        setSliceIndex(sliceIndex + 3);
        console.log("Load more pressed")
    }

    const handleAddPress = () => {
        navigation.navigate("OrderSummary")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={particularCategory.image} style={styles.mainImage} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{particularCategory.title}</Text>
                    <Text style={styles.bookingsNumber}>({particularCategory.bookings} Bookings)</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <ItemRating rating={particularCategory.rating} />
                </View>
                <Offers data={offersData} />
                <BookServices categoryData={popularServices} />
                <PopularServices data={popularServices} handleViewPress={handleViewPress} handleLoadMorePress={handleLoadMorePress} sliceIndex={sliceIndex} handleAddPress={handleAddPress} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bookingsNumber: {
        color: '#000',
        fontSize: isTablet() ? 18 : 14,
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 35 : 0,
        backgroundColor: '#fff',
    },
    mainImage: {
        width: '100%',
        height: 250,
    },
    ratingContainer: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
    },
    titleContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    serviceItem: {
        alignItems: 'center',
        marginTop: 20,
        width: 102,
        height: 131,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceImage: {
        width: "100%",
        height: 94,
        borderRadius: 10,
    },
    serviceTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default ParticularCategory;
