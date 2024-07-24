import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native'

const Banners = ({ bannerData }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={bannerData}
                renderItem={({ item }) => (
                    <ImageBackground
                        resizeMode='cover'
                        source={item.image}
                        style={styles.bannerContainer}
                        borderRadius={10}
                    >
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                    </ImageBackground>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30,
    },
    bannerContainer: {
        alignItems: 'center',
        marginLeft: 20,
        width: 182,
        height: 99,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        width: '80%',
    },
})

export default Banners