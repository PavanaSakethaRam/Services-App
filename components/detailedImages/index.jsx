import React, { useState, useRef } from 'react';
import { View, Image, FlatList } from 'react-native';

import styles from './styles';

const DetailedImages = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleIndexChanged = (index) => {
        setActiveIndex(index);
        console.log(index);
    };

    const serviceItem = ({ item, index }) => (
        <View style={styles.imageContainer} key={index}>
            <Image
                source={item}
                style={styles.image}
            />
        </View>
    );

    return (
        <View>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={serviceItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
                    );
                    handleIndexChanged(index);
                }}
            />
            <View style={styles.dotContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, { opacity: index === activeIndex ? 1 : 0.2 }]}
                    />
                ))}
            </View>
        </View>
    );
};

export default DetailedImages;
