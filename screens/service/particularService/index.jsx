import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { customerAddress, serviceData, categoryData } from '../../home/data';

import DetailedImages from '../../../components/detailedImages/index';
import ItemRating from '../../../components/itemRating';
import UnorderedList from '../../../components/unorderedList';
import ServiceCategories from '../../../components/serviceCategories/index';
import FAQAccordion from '../../../components/FAQ/index';
import CustomerReviews from '../../../components/customerReviews/index';
import styles from './styles';

const ParticularService = ({ navigation, route }) => {
    const { id } = route.params;

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleCategoryPress = (id) => {
        navigation.navigate("ParticularCategory", { id })
    }

    const handleAddPress = () => {
        navigation.navigate("OrderSummary")
    }

    const { title, price, rating, reviews, detailedImages, duration, serviceIncludes, serviceExcludes, FAQ, customerReviews } = serviceData.find((item) => item.id === id);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView>
                    <View style={styles.header}>
                        <Ionicon name="arrow-back-outline" size={30} onPress={handleBackPress} />
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTitle}>Your Address</Text>
                        <Text style={styles.address}>{customerAddress.address}</Text>
                    </View>
                    <DetailedImages data={detailedImages} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.serviceTitle}>{title}</Text>
                        <Pressable style={styles.addBtn} onPress={handleAddPress}>
                            <Text style={styles.addBtnContent}>Add</Text>
                        </Pressable>
                    </View>
                    <View style={styles.rating}>
                        <ItemRating rating={rating} type="service" />
                    </View>
                    <View style={styles.serviceDetails}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.duration}>{`\u2022 ${duration}`}</Text>
                    </View>
                    <View style={styles.listView}>
                        <UnorderedList title="Service Includes" data={serviceIncludes} />
                    </View>
                    <View style={styles.listView}>
                        <UnorderedList title="Service Excludes" data={serviceExcludes} />
                    </View>
                    <View style={styles.otherServicesContainer}>
                        <Text style={styles.otherServiceTitle}>Other Similar Services</Text>
                        <ServiceCategories categoryData={categoryData} start={0} end={categoryData.length} handleCategoryPress={handleCategoryPress} />
                    </View>
                    <View style={styles.FAQContainer}>
                        <FAQAccordion data={FAQ} />
                    </View>
                    <View style={styles.customerReviews}>
                        <CustomerReviews data={customerReviews} rating={rating} reviews={reviews} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ParticularService;
