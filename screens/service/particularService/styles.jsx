import { StyleSheet, Platform } from 'react-native';
import isTablet from '../../../hooks/isTablet';

const styles = StyleSheet.create({
    addressContainer: {
        paddingBottom: 20,
        paddingHorizontal: 20,
        gap: 10,
    },
    addressTitle: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
    },
    address: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    header: {
        flexDirection: 'row',
        marginVertical: 30,
        paddingLeft: 20,
    },
    titleContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceTitle: {
        color: '#000',
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
    },
    addBtn: {
        borderColor: '#292363',
        borderWidth: 0.6,
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderRadius: 5,
    },
    addBtnContent: {
        color: '#292363',
        fontSize: isTablet() ? 18 : 14,
    },
    rating: {
        marginHorizontal: 20,
    },
    serviceDetails: {
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
    },
    price: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        color: '#000',
    },
    duration: {
        fontSize: isTablet() ? 22 : 18,
        color: '#000',
        marginLeft: 10,
        opacity: 0.7,
    },
    listView: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    otherServicesContainer: {
        marginTop: 20,
    },
    otherServiceTitle: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        color: '#000',
        marginHorizontal: 20,
    },
    FAQContainer: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    customerReviews: {
        marginTop: 40,
        marginHorizontal: 20,
    }
});

export default styles;