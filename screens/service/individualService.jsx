import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { individualService } from './data';
import isTablet from '../../hooks/isTablet';

import ItemRating from '../../components/itemRating';
import IndividualServiceItem from '../../components/individualServiceItem';
import WorkingSteps from '../../components/workingSteps';
import TipsList from '../../components/afterCareTips';
import FAQ from '../../components/FAQ/index';
import CustomerReviews from '../../components/customerReviews';

const IndividualService = ({ route, navigation }) => {
    const { id } = route.params;

    const handleAddToCart = () => {
        navigation.navigate('OrderSummary');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={individualService.image} style={styles.mainImage} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{individualService.title}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <ItemRating rating={individualService.rating} />
                    <Text style={styles.bookingsNumber}>({individualService.bookings} Bookings)</Text>
                </View>
                <View style={styles.divider}></View>
                <IndividualServiceItem data={individualService.services} handleAddToCart={handleAddToCart}/>
                <WorkingSteps data={individualService.workingSteps} />
                <TipsList data={individualService.careTips} />
                <View style={styles.faqContainer}>
                    <FAQ data={individualService.faqs} />
                </View>
                <View style={styles.customerReviewsContainer}>
                    <CustomerReviews data={individualService.customerReviews} rating={individualService.rating} reviews={individualService.reviews} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bookingsNumber: {
        color: '#000',
        fontSize: isTablet() ? 16 : 12,
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 35 : 0,
        backgroundColor: '#fff',
    },
    customerReviewsContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    mainImage: {
        width: '100%',
        height: 250,
    },
    ratingContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
    },
    faqContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
    },
    titleContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '80%',
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
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 30,
    }
});

export default IndividualService;
