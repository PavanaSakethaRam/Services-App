import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native'
import { categoryData, bannerData, serviceData } from "./data"

import HomeMain from "../../components/homeMain/index"
import BookServices from "../../components/bookServices"
import Banners from '../../components/banners'
import OtherServices from '../../components/otherServices/index'
import PromotionBanner from '../../components/promotionBanner/index'

const Home = ({ handleServicePress, handleCategoryPress, handleIndividualServicePress }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView>
                    <HomeMain />
                    <BookServices title="Book Services" categoryData={categoryData} handleCategoryPress={handleCategoryPress} />
                    <Banners bannerData={bannerData} />
                    <OtherServices title="Most Booked Services" data={serviceData} seeAllBtn={true} handleServicePress={handleServicePress} handleIndividualServicePress={handleIndividualServicePress} />
                    <OtherServices title="Cleaning & Pest Control" data={serviceData} seeAllBtn={false} handleServicePress={handleServicePress} />
                    <PromotionBanner title="Single Wall To Full House" image={require('../../assets/images/Home_Main_2.png')} />
                    <OtherServices title="Quick Repair" data={serviceData} seeAllBtn={true} handleServicePress={handleServicePress} handleIndividualServicePress={handleIndividualServicePress} />
                    <PromotionBanner title="Expert Technician At Doorstep in 2Hrs" image={require('../../assets/images/Home_Main_3.jpeg')} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
    }
})

export default Home