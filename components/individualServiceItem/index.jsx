import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import ServiceItem from './serviceItem'
import { individualService } from '../../screens/service/data'

const IndividualServiceItem = ({ data, handleAddToCart }) => {

    return (
        <View style={styles.container}>
            {
                data.map((service, index) => (
                    <ServiceItem key={index} service={service} handleAddToCart={handleAddToCart}/>
                ))
            }
        </View>
    )
}

export default IndividualServiceItem