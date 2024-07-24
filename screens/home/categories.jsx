import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native'
import Ionicon from "react-native-vector-icons/Ionicons";
import { customerAddress, categoryData, categoryBannerData, serviceData, mostBooked } from './data';

import Banners from '../../components/banners';
import OtherServices from '../../components/otherServices/index';
import ServiceCategories from '../../components/serviceCategories/index';
import ServiceWithDetails from '../../components/serviceWithDetails';

const Categories = ({ handleServicePress, handleCategoryPress, handleIndividualServicePress }) => {
    const sliceIndex = categoryData.length / 2;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Ionicon name="grid-outline" size={25} color="#000" />
                    <Text style={styles.title}>Categories</Text>
                </View>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Your Address</Text>
                    <Text style={styles.address}>{customerAddress.address}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor='#000'
                        placeholder='What services do you need?'
                    />
                    <Ionicon name="search-outline" size={20} style={styles.searchIcon} />
                </View>
                <ServiceCategories categoryData={categoryData} start={0} end={sliceIndex} handleCategoryPress={handleCategoryPress} />
                <ServiceCategories categoryData={categoryData} start={sliceIndex} end={categoryData.length} handleCategoryPress={handleCategoryPress} />
                <Banners bannerData={categoryBannerData} />
                <OtherServices title="Most Booked Services" data={serviceData} seeAllBtn={true} handleServicePress={handleServicePress} handleIndividualServicePress={handleIndividualServicePress} />
                <ServiceWithDetails title="Most Booked Services" data={mostBooked} handleServicePress={handleServicePress} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        gap: 10,
    },
    addressTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    address: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 40,
        borderRadius: 16,
        backgroundColor: '#fff',
        marginLeft: 20,
        paddingHorizontal: 20,
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
    },
    input: {
        flex: 1,
    },
    searchIcon: {
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },

})

export default Categories