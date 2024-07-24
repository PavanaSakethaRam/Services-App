import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    icon: { marginTop: 20, },
    customerDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 1,
    },
    customerDetails: { width: '70%' },
    customerDetailsHeader: {
        flexDirection: 'row',
        gap: 10,
    },
    customerName: {
        fontSize: 18,
        fontWeight: '600',
    },
    customerAddress: {
        fontSize: 14,
        marginTop: 5,
    },
    btnContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#292363',
    },
    btnContent: {
        color: '#292363',
        fontSize: 12,
        fontWeight: '600',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
    },
    subTitle: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
        marginTop: 5,
    },
    dateList: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
    },
    dateItem: {
        width: 70,
        paddingVertical: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#292363',
        alignItems: 'center',
    },
    day: {
        fontSize: 14,
        fontWeight: '600',
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    noteContainer: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    noteTitle: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
    },
    timeList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        gap: 20,
    },
    timeItem: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#292363',
        alignItems: 'center',
    },
    time: {
        fontSize: 14,
        fontWeight: '600',
    },
    proceedBtnContainer: {
        backgroundColor: '#292363',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 60,
    },
    proceedBtnContent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default styles;