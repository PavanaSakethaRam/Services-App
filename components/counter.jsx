import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        count !== 1 ? setCount(count - 1) : console.log("0 is the minimum value")
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: "#292363",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "rgba(41, 35, 99, 0.15)",
        marginTop: 20,
        width: 80,
    },
    button: {
        paddingHorizontal:10,
        paddingVertical:5,
      
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: "#292363"
    },
    quantity: {
        fontSize: 14,
        fontWeight: '600',
        color: "#292363"
    },
})

export default Counter