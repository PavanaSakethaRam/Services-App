import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    leftContainer: {
        width: '70%',
    },
    duration: {
        fontSize: isTablet() ? 16 : 12,
        marginLeft: 5,
        color: '#000',
    },
    descriptionList: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    descriptionItem: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    descriptionText: {
        color: '#000',
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '400',
        opacity: 0.7,
        letterSpacing: 0.3,
    },
    serviceItem: {
        marginTop: 20,
    },
    serviceContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
    },
    topContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serviceImage: {
        width: 100,
        height: 94,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#000',
        marginTop: 5,
    },
    servicePriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 5,
    },
    price: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#000',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
    },
    reviews: {
        fontSize: isTablet() ? 14 : 10,
        marginLeft: 5,
        color: '#000',
    },
    bottomContainer: {
        marginVertical: 10,
    },
    btnContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10,
    },
    addBtn: {
        width: 70,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292363',
    },
    addBtnText: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#fff',
    },
    viewBtn: {
        width: 120,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#292363',
    },
    viewBtnText: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#292363',
    },
})

export default styles;