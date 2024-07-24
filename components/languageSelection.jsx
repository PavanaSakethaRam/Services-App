import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import isTablet from '../hooks/isTablet';

const LanguageSelection = ({ languages }) => {

    const [selectedLanguage, setSelectedLanguage] = useState("English (UK)");

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {languages.map((language) => (
                    <TouchableOpacity
                        key={language.id}
                        onPress={() => handleLanguageSelect(language.name)}
                        style={styles.languageItem}>
                        <Text style={styles.languageName}>{language.name}</Text>
                        {selectedLanguage === language.name ?
                            <View style={styles.radioCircleChecked}>
                                <View style={styles.checkedRadio} />
                            </View>
                            :
                            <View style={styles.radioCircle}>
                            </View>
                        }
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    radioCircle: {
        width: isTablet() ? 28 : 22,
        height: isTablet() ? 28 : 22,
        borderRadius: isTablet() ? 14 : 11,
        backgroundColor: '#E3EEFF',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedRadio: {
        width: isTablet() ? 16 : 10,
        height: isTablet() ? 16 : 10,
        borderRadius: isTablet() ? 8 : 5,
        backgroundColor: '#fff',
    },
    selectedLanguageText: {
        marginTop: 10,
    },
    radioCircleChecked: {
        width: isTablet() ? 28 : 22,
        height: isTablet() ? 28 : 22,
        borderRadius: isTablet() ? 14 : 11,
        backgroundColor: '#292363',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageName: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '400',
        color: '#000',
    },
});

export default LanguageSelection;
