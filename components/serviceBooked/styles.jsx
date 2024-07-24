import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    backBtn: { marginTop: 20, },
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginTop: 20,
        paddingBottom: 20,
        gap: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: isTablet() ? 26 : 22,
        fontWeight: '600',
        color: '#000',
    },
    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    dateText: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: '#000',
    },
    confirmationContainer: {
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    rightConfirmationContainer: {
        width: "70%",
        gap: 10,
    },
    confirmationTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    subTitle: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    btnContainer: {
        width: isTablet() ? 160 : 140,
        paddingVertical: isTablet() ? 20 : 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderColor: '#292363',
        borderWidth: 1,
        alignItems: 'center',
    },
    btnContent: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#292363',
    },
    leftConfirmationContainer: {
        width: "30%",
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    serviceStatus: {
        paddingVertical: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    serviceStatusTitle: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#000',
    },
    serviceStatusText: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    OtpContainer: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#292363',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OtpContent: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#fff',
    },
    optionBtnContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 60,
    },
    cancelBtnContainer: {
        width: isTablet() ? 160 : 140,
        paddingVertical: isTablet() ? 20 : 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#BF2D21',
        borderWidth: 1,
    },
    cancelBtnContent: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#BF2D21',
    },
    reviewContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: { padding: 2, },
    writeReviewBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#292363',
        borderWidth: 1,
    },
    writeReviewText: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        color: '#292363',
    },
});

export default styles;