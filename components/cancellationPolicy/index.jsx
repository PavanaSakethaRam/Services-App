import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const cancellationPolicies = [
    "Lorem ipsum dolor sit amet, At repellendus recusandae qui dolores tempora sed. illo alias est dolores itaque",
    "Lorem ipsum dolor sit amet, At repellendus recusandae qui dolores tempora sed. illo alias est dolores itaque",
    "Lorem ipsum dolor sit amet, At repellendus recusandae qui dolores tempora sed. illo alias est dolores itaque",
]

const CancellationPolicy = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cancellation & reschedule policy</Text>
            <View style={styles.policyListContainer}>
                {
                    cancellationPolicies.map((item, index) => {
                        return (
                            <View style={styles.policyContainer} key={index}>
                                <Text>{`\u2022`}</Text>
                                <Text style={styles.policyContent}>{item}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 80,
        backgroundColor: '#F8F8F8',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    policyListContainer: {
        marginTop: 20,
        gap: 10,
    },
    policyContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    policyContent: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.7)',
    },
})

export default CancellationPolicy