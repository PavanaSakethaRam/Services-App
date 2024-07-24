import React from 'react'
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'
import styles from "./styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView from 'react-native-maps';

import { customerDetails as data } from './data';

const AddAddress = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
    }

    const handleDateAndTimePress = () => {
        navigation.navigate("DateAndTime")
    }

    const handleSaveBtnPress = () => {
        console.log("save btn pressed")
    }

    const locationData = { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={25} color="#000" style={styles.icon} onPress={onBackPress} />
                <MapView
                    style={styles.map}
                    initialRegion={locationData}
                />
            </View>
            <View style={styles.customerDetailsContainer}>
                <View style={styles.customerDetails}>
                    <Text style={styles.customerName}>{data.name}</Text>
                    <Text style={styles.customerAddress}>{data.address}</Text>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleSaveBtnPress}>
                    <Text style={styles.btnContent}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="House/Flatno."
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Landmark"
                />
            </View>
            <View style={styles.saveOptionsContainer}>
                <Text style={styles.saveOptionTitle}>Save as</Text>
                <View style={styles.saveOptions}>
                    <TouchableOpacity style={styles.saveOption}>
                        <Text style={styles.saveOptionText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveOption}>
                        <Text style={styles.saveOptionText}>Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveOption}>
                        <Text style={styles.saveOptionText}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.btnMainContainer}>
                <TouchableOpacity style={styles.saveBtnContainer} onPress={handleDateAndTimePress}>
                    <Text style={styles.saveBtnContent}>Save And Proceed The Slots</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddAddress