import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const AddCard = ({ navigation, amount }) => {
    const [saveCard, setSaveCard] = useState(false);

    const handleSaveCardPress = () => {
        navigation.navigate("Payments")
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                {/* Go back button */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} />
                </TouchableOpacity>
                <View style={styles.header}>
                    {/* Title */}
                    <Text style={styles.title}>Total Amount Payable: {amount}</Text>
                </View>
                <View style={styles.cardContainer}>
                    {/* Card Number */}
                    <Text style={styles.subTitle}>Card Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter card number"
                        keyboardType="numeric"
                        maxLength={16}
                    />
                    <View style={styles.cardDetailsContainer}>
                        <View style={styles.cardDetails}>
                            {/* Valid Thru */}
                            <Text style={styles.subTitle}>Valid Thru</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="MM/YY"
                                keyboardType="numeric"
                                maxLength={5}
                            />
                        </View>
                        <View style={styles.cardDetails}>
                            {/* CVV */}
                            <Text style={styles.subTitle}>CVV</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter CVV"
                                keyboardType="numeric"
                                maxLength={3}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <View style={styles.checkboxContainer}>
                        {/* Save Card checkbox */}
                        <TouchableOpacity
                            style={styles.checkbox}
                            onPress={() => setSaveCard(!saveCard)}
                        >
                            {saveCard && <Ionicons name="checkmark" size={20} color="#292363" />}
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>Save this card for faster payments</Text>
                    </View>
                </View>
                {/* Save Card button */}
                <TouchableOpacity style={styles.btnContainer} onPress={handleSaveCardPress}>
                    <Text style={styles.btnText}>Save Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 20,
        paddingBottom: 20,
        gap: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
    },
    cardContainer: {
        marginTop: 20,
        gap: 10,
        borderColor: '#eee',
        borderWidth: 1,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderBottomColor: '#A7A7A7',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    cardDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    cardDetails: {
        width: "45%",
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#A7A7A7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxText: {
        fontSize: 16,
        color: '#000',
    },
    btnContainer: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#292363',
        marginTop: 20,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    },
});

export default AddCard;
