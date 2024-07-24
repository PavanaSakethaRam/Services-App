import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import ItemRating from '../itemRating'
import styles from './styles'

const OtherServices = ({ title, data, seeAllBtn, handleServicePress, type, handleIndividualServicePress }) => {
    const serviceItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={handleServicePress ? () => handleServicePress(item.id) : null}>
                <View style={styles.listContainer}>
                    <Image
                        source={item.image}
                        style={styles.image} y
                    />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <ItemRating rating={item.rating} />
                    <Text style={styles.itemTitle}>{item.price}</Text>
                </View>
                {
                    type === "Order" ?
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.addToCartBtn}>Add</Text>
                        </TouchableOpacity> : null
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {seeAllBtn ?
                    <TouchableOpacity onPress={handleIndividualServicePress}>
                        <Text style={styles.seeAllBtn}>See All</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
            <FlatList
                data={data}
                renderItem={serviceItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default OtherServices