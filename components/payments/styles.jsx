import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        paddingHorizontal: 20
    },
    mainContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        paddingVertical: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    paymentMethodsContainer: {
        paddingVertical: 20,
    },
    paymentMethod: {
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        flexDirection: 'row',
    },
    paymentMethodText: {
        fontSize: 18,
        fontWeight: '600'
    },
    cardContainer: {
        marginVertical: 20,
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#707070'
    },
    addedCardContainer: {
        marginVertical: 20,
        backgroundColor: 'rgba(255, 209, 119, 0.5)',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    card: {
        padding: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        gap: 5
    },
    cardHeaderText: {
        fontSize: 14,
        fontWeight: '600'
    },
    expires: {
        fontSize: 12,
        fontWeight: '600',
        color: '#707070'
    },
    cvv: {
        fontSize: 12,
        fontWeight: '600',
        color: '#707070',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#DB222A',
        padding: 10,
        borderRadius: 5,
        width: "35%",
        backgroundColor: '#fff'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 14,
        height: 14,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    learnMoreContainer: {
        marginTop: 10,
    },
    learnMoreContent: {
        fontSize: 14,
        fontWeight: '600',
        color: '#292363',
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedRadio: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    radioCircleChecked: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#292363',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payBtn: {
        backgroundColor: '#292363',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    payBtnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
})

export default styles;