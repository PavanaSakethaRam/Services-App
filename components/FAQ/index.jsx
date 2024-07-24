import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const FAQAccordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const animatedValues = data.map(() => new Animated.Value(0));

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const renderAccordionItem = ({ item, index }) => {
        const isOpen = index === activeIndex;
        const rotateAnimation = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
        });

        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => toggleAccordion(index)}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{item.question}</Text>
                        {
                            isOpen ? (
                                <Ionicons name="chevron-up-outline" size={20} />
                            ) : (
                                <Ionicons name="chevron-down-outline" size={20} />
                            )
                        }
                    </View>
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.content}>
                        <Text style={styles.contentText}>{item.answer}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View>
            <Text style={styles.title}>Frequently Asked Questions</Text>
            <FlatList
                data={data}
                renderItem={renderAccordionItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default FAQAccordion;