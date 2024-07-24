import React from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import styles from './styles'

const PromotionBanner = ({ title, image }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={styles.image}
                resizeMode='cover'
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>We got you covered</Text>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Upto 15% OFF</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PromotionBanner