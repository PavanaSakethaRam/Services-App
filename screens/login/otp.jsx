import React from 'react'
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import OTPTextView from 'react-native-otp-textinput'

const OTP = ({ navigation, route }) => {
    const { number, countryCode } = route.params
    const [otp, setOtp] = React.useState('')

    const handlePress = () => {
        if (otp.length !== 6 || isNaN(otp) || otp === '' || otp === null || otp === undefined) {
            alert('Please enter a valid OTP')
            return
        }
        console.log(otp)
        navigation.navigate('HomeScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Enter the 6-Digit Number Sent to</Text>
                <Text style={styles.infoText}>{countryCode} {number}</Text>
            </View>
            <View>
                <OTPTextView
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpTextInput}
                    tintColor='#000'
                    handleTextChange={(text) => {
                        console.log(text)
                        setOtp(text)
                    }}
                    inputCount={6}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    touchSoundDisabled={false}
                    onPress={handlePress}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Verify And Proceed</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    infoContainer: {
        width: '100%',
    },
    infoText: {
        color: '#000',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
    },
    otpContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpTextInput: {
        width: 40,
        height: 45,
        borderBottomWidth: 1,
        color: '#000',
    },
    buttonContainer: {
        marginTop: 30,
        width: '90%',
        height: 40,
    },
    button: {
        backgroundColor: '#292363',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
    },
})

export default OTP