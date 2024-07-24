import { StyleSheet, Platform } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: '#fff',
    },
    mainContainer: {
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        color: '#000',
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    icon: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    headerContainer: {
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
    },
    orderItems: {
        marginTop: 40,
    },
    serviceItemContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    serviceItemLeftContainer: {
        gap: 20,
        width: '80%',
    },
    serviceName: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        color: '#000',
    },
    servicePrice: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
    },
    serviceHeader: {
        gap: 15,
        paddingBottom: 20,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
    },
    serviceDescriptionContainer: {
        marginLeft: 10
    },
    eachServiceDescription: {
        flexDirection: 'row',
        gap: 5,
    },
    serviceDescription: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    servicePreferences: {
        marginTop: 40,
    },
    servicePreferencesContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    addInstructionsContainer: {
        paddingVertical: 10,
        marginTop: 10,
    },
    subTitle: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 40,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    input: {
        width: '80%',
    },
    sendBtn: {
        width: '20%',
        height: '105%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292363',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    sendBtnText: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#fff',
    },
    paymentSummaryContainer: {
        marginTop: 40,
    },
    paymentSummary: {
        paddingHorizontal: 20,
    },
    paymentSummaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    paymentSummaryItemText: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.7)',
    },
    paymentSummaryItemPrice: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#000',
    },
    paymentSummaryTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: 1,
    },
    btnContainer: {
        marginHorizontal: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292363',
        borderRadius: 5,
        marginBottom: 10
    },
    btnContainerContent: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#fff',
    },
    serviceItemRightContainer: {
        marginLeft: 10
    }
})

export default styles;