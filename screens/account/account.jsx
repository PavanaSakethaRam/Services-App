import React from 'react'
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native'
import { customerDetails } from './data'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from './styles'

const Account = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);

    const onBackPress = () => {
        navigation.goBack()
    }

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    const onEditProfilePress = () => {
        navigation.navigate('EditProfile')
    }

    const onEditLanguagePress = () => {
        navigation.navigate('EditLanguage')
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}></View>
            <TouchableOpacity style={styles.titleContainer}>
                <Ionicons name="arrow-back" size={30} color="#000" onPress={onBackPress} />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image
                    source={customerDetails.image}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.imageEditIconContainer}>
                    <AntDesign name="edit" size={20} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{customerDetails.name}</Text>
                <Text style={styles.mobile}>+91 {customerDetails.mobile}</Text>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={onEditProfilePress}>
                    <View style={styles.optionLeftContainer}>
                        <AntDesign name="edit" size={24} color="#000" />
                        <Text style={styles.optionTitle}>Edit profile information</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => { console.log("My Orders") }}>
                    <View style={styles.optionLeftContainer}>
                        <Ionicons name="cart-outline" size={24} color="#000" />
                        <Text style={styles.optionTitle}>My Orders</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.option}>
                    <View style={styles.optionLeftContainer}>
                        <Ionicons name="notifications-outline" size={24} color="#000" />
                        <Text style={styles.optionTitle}>Notifications</Text>
                    </View>
                    <View style={styles.optionRightContainer}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#292363" }}
                            thumbColor="#fff"
                            ios_backgroundColor="#fff"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.option} onPress={onEditLanguagePress}>
                    <View style={styles.optionLeftContainer}>
                        <Ionicons name="language" size={24} color="#000" />
                        <Text style={styles.optionTitle}>Language</Text>
                    </View>
                    <View style={styles.optionRightContainer}>
                        <Text style={styles.optionLanguageTitle}>{customerDetails.language}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account