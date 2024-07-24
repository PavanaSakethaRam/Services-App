import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import OtherServices from '../otherServices'
import Offers from '../offers'
import styles from './styles'
import Counter from '../counter'

import { serviceData, bookingDetails as data, offersData } from './data'

const OrderSummary = ({ navigation }) => {
    const totalSaved = 100
    const servicePreferencesData = ["Avoid calling before reaching the location"]
    const itemTotal = "1,590"
    const discount = "15"
    const total = "1,605"

    const handleAddAddressPress = () => {
        navigation.navigate("AddAddress")
    }

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Ionicons name="arrow-back" size={30} color="#000" style={styles.icon} onPress={onBackPress} />
                    <Text style={styles.title}>{`You’re saving total ₹${totalSaved} on this order!`}</Text>
                </View>
                <View style={styles.orderItems}>
                    <Text style={styles.title}>Your Package</Text>
                    <View style={styles.serviceItemContainer}>
                        {
                            data.map((item, index) => {
                                return (
                                    <View style={styles.serviceItem} key={index}>
                                        <View style={styles.serviceItemLeftContainer}>
                                            <View style={styles.serviceHeader}>
                                                <Text style={styles.serviceName}>{item.name}</Text>
                                                <Text style={styles.servicePrice}>{item.amount}</Text>
                                            </View>
                                            <View style={styles.serviceDescriptionContainer}>
                                                {
                                                    item.description.map((desc, index) => {
                                                        return (
                                                            <View style={styles.eachServiceDescription} key={index}>
                                                                <Text>{`\u2022`}</Text>
                                                                <Text style={styles.serviceDescription}>{desc}</Text>
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View style={styles.serviceItemRightContainer}>
                                            <Counter initialValue={item.quantity} />
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                <OtherServices title="Frequently Brought Together" data={serviceData} handleServicePress={() => console.log("Btn pressed")} seeAllBtn={true} type="Order" />
                <View style={styles.servicePreferences}>
                    <Text style={styles.title}>Service Preferences</Text>
                    <View style={styles.servicePreferencesContainer}>
                        {
                            servicePreferencesData.map((item, index) => {
                                return (
                                    <View style={styles.eachServiceDescription} key={index}>
                                        <Ionicons name="checkbox-outline" size={20} color="#000" />
                                        <Text style={styles.serviceDescription}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                        <View style={styles.addInstructionsContainer}>
                            <Text style={styles.subTitle}>Add Instructions</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Add Instructions"
                                    style={styles.input}
                                    multiline={true}
                                />
                                <TouchableOpacity style={styles.sendBtn}>
                                    <Text style={styles.sendBtnText}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Offers data={offersData} />
                    <View style={styles.paymentSummaryContainer}>
                        <Text style={styles.title}>Payment Summary</Text>
                        <View style={styles.paymentSummary}>
                            <View style={styles.paymentSummaryItem}>
                                <Text style={styles.paymentSummaryItemText}>Item Total</Text>
                                <Text style={styles.paymentSummaryItemPrice}>{`₹${itemTotal}`}</Text>
                            </View>
                            <View style={styles.paymentSummaryItem}>
                                <Text style={styles.paymentSummaryItemText}>Membership Discount</Text>
                                <Text style={styles.paymentSummaryItemPrice}>{`₹${discount}`}</Text>
                            </View>
                            <View style={styles.paymentSummaryTotal}>
                                <Text style={styles.title}>Total</Text>
                                <Text style={styles.title}>{`₹${total}`}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnContainer} onPress={handleAddAddressPress}>
                            <Text style={styles.btnContainerContent}>Add Address And Slots</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderSummary