import { StyleSheet } from 'react-native';
import isTablet from "../../hooks/isTablet";

const styles = StyleSheet.create({
    bookingDetailsContainer: {
        marginTop: 20,
        paddingBottom: 20,
        gap: 10,
    },
    bookingDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookingDetailsTitle: {
        fontWeight: '600',
        fontSize: isTablet() ? 26 : 22,
        marginTop: 10,
        color: '#000',
    },
    btnContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#292363',
    },
    btnContent: {
        color: '#292363',
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
    },
    detailsContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    amountLeftContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    amountText: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '400',
        color: '#000',
    },
    amountValue: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
    },
    address: {
        flexDirection: 'row',
        gap: 10,
    },
    addressLeftContainer: {
        gap: 10,
    },
    addressTitle: {
        fontSize: isTablet() ? 20 : 16,
        color: '#000',
    },
    addressText: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: 'rgba(0,0,0,0.5)',
    },
    date: {
        flexDirection: 'row',
        gap: 10,
    },
    dateText: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '400',
        color: '#000',
    },
})

export default styles;