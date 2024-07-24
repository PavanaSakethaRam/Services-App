import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

const Login = ({ navigation }) => {
    const [number, setNumber] = React.useState('');
    const [selectedCountryCode, setSelectedCountryCode] = React.useState('+91');

    const handlePress = () => {
        if (number.length !== 10 || isNaN(number) || number === '' || number === null || number === undefined) {
            alert('Please enter a valid phone number')
            return
        }
        console.log(selectedCountryCode)
        console.log(number)
        navigation.navigate('OTP', { number: number, countryCode: selectedCountryCode })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text}>Enter Phone Number</Text>
                <View style={styles.titleContainer}><Text style={styles.text}>Phone Number</Text></View>
                <View style={styles.inputContainer}>
                    <Text>{selectedCountryCode}</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(text) => {
                            setNumber(text)
                            console.log(text)
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={handlePress}>
                        <View style={styles.btnContentContainer}>
                            <Text style={styles.btnContent}>Get OTP</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginTop: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.35)',
        paddingVertical: 10,
        width: '90%',
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 27,
        textAlign: 'center',
    },
    textInput: {
        height: 40,
        paddingLeft: 10,
        borderWidth: 0,
    },
    buttonContainer: {
        marginTop: 30,
        width: '90%',
        height: 40,
    },
    btnContentContainer: {
        backgroundColor: '#292363',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContent: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 40,
        marginTop: 20,
        paddingHorizontal: 20,
        color: '#000',
        borderBottomColor: 'rgba(0, 0, 0, 0.35)',
        borderBottomWidth: 1,
    },
    titleContainer: {
        marginTop: 40,
        alignItems: 'flex-start',
        width: '90%',
    },
});

export default Login;
