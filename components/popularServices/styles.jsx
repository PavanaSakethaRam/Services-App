import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexWrap: isTablet() ? 'wrap' : 'nowrap',
        flexDirection: isTablet() ? 'row' : 'column',
        justifyContent: isTablet() ? 'space-between' : 'flex-start',
    },
    leftContainer: {
        width: '70%',
    },
    duration: {
        fontSize: isTablet() ? 16 : 12,
        marginLeft: 5,
        color: '#000',
    },
    title: {
        paddingHorizontal: 20,
        fontSize: isTablet() ? 22 : 18,
        paddingTop: 20,
        fontWeight: '600',
        color: '#000',
    },
    serviceItem: {
        marginTop: 20,
    },
    serviceContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
        width: isTablet() ? "45%" : '100%',
    },
    topContainer: {
        marginTop: 20,
        height: 170,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
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
        marginTop: 5,
        alignContent: 'center',
    },
    reviews: {
        fontSize: isTablet() ? 14 : 10,
        marginLeft: 5,
        color: '#000',
        marginTop: isTablet() ? 0 : 2
    },
    offerContainer: {
        marginTop: 20,
    },
    card: {
        width: 80,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        gap: 5,
    },
    offerTitle: {
        fontSize: isTablet() ? 14 : 10,
        fontWeight: '600'
    },
    bottomContainer: {
        marginVertical: 10,
    },
    otherInfo: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '400',
        color: '#000',
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
    loadMoreBtn: {
        width: 120,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#292363',
    },
    loadMoreBtnText: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#292363',
    },
    loadMoreBtnContainer: {
        marginVertical: 40,
        alignItems: 'center',
    },
    divider: {
        width: '100%',
        height: 5,
        backgroundColor: '#eee',
        marginTop: 20,
    },
    eachServiceContainer: {
        paddingHorizontal: 20
    }
})

export default styles;