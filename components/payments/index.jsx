import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

import { addedCardDetails as data } from './data'

const Payments = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    const [selectedMethod, setSelectedMethod] = useState("AddedCard");

    const handlePayNowPress = () => {
        selectedMethod === "AddCard" ? navigation.navigate("AddCard") :
        navigation.navigate("ServiceBooking")
    }

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <Ionicons name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={styles.title}>Select Payment Method</Text>
                    </View>
                    <View style={styles.paymentMethodsContainer}>
                        <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedMethod("UPI/Netbanking")}>
                            {
                                selectedMethod === "UPI/Netbanking" ?
                                    <View style={styles.radioCircleChecked}><View style={styles.checkedRadio} /></View>
                                    :
                                    <View style={styles.radioCircle}></View>
                            }
                            <Text style={styles.paymentMethodText}>UPI/Netbanking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardContainer} onPress={() => setSelectedMethod("AddedCard")}>
                            <Text style={styles.subTitle}>Credit and Debit Card</Text>
                            <View style={styles.addedCardContainer}>
                                {
                                    selectedMethod === "AddedCard" ?
                                        <View style={styles.radioCircleChecked}><View style={styles.checkedRadio} /></View>
                                        :
                                        <View style={styles.radioCircle}></View>
                                }
                                <View style={styles.card}>
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.cardHeaderText}>{data.cardType}</Text>
                                        <Text style={styles.cardHeaderText}>{data.cardNumber}</Text>
                                    </View>
                                    <Text style={styles.title}>{data.cardHolderName}</Text>
                                    <Text style={styles.expires}>Expires {data.expiryDate}</Text>
                                    <TextInput style={styles.cvv} placeholder="Enter CVV" keyboardType="numeric" maxLength={3} secureTextEntry={true} />
                                    <View style={styles.checkboxContainer}>
                                        <TouchableOpacity
                                            style={styles.checkbox}
                                            onPress={() => setIsChecked(!isChecked)}
                                        >
                                            {isChecked && <Ionicons name="checkmark" size={14} color="#000" />}
                                        </TouchableOpacity>
                                        <Text style={styles.checkboxLabel}>Save card as per new RBI guidelines.</Text>
                                    </View>
                                    <TouchableOpacity style={styles.learnMoreContainer}>
                                        <Text style={styles.learnMoreContent}>Learn More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View><Text style={styles.subTitle}>More Ways to Pay</Text></View>
                        <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedMethod("AddCard")}>
                            {
                                selectedMethod === "AddCard" ?
                                    <View style={styles.radioCircleChecked}><View style={styles.checkedRadio} /></View>
                                    :
                                    <View style={styles.radioCircle}></View>
                            }
                            <Text style={styles.paymentMethodText}>Add Debit/Credit Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentMethod} onPress={() => setSelectedMethod("COD")}>
                            {
                                selectedMethod === "COD" ?
                                    <View style={styles.radioCircleChecked}><View style={styles.checkedRadio} /></View>
                                    :
                                    <View style={styles.radioCircle}></View>
                            }
                            <Text style={styles.paymentMethodText}>Pay On Delivery</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handlePayNowPress} style={styles.payBtn}>
                        <Text style={styles.payBtnText}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payments