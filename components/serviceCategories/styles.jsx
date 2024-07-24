import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    serviceContainer: {
        marginTop: 20,
    },
    serviceItem: {
        alignItems: 'center',
        marginLeft: 20,
        width: isTablet() ? 132 : 102,
        height: isTablet() ? 161 : 131,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    serviceImage: {
        width: "100%",
        height: isTablet() ? 114 : 94,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: isTablet() ? 14 : 12,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        marginTop: 5
    },
})

export default styles