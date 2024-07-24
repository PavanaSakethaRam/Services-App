import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    icon: {
        marginTop: 40,
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 1,
    },
    customerDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: '#F8F8F8',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
    customerDetails: {
        width: '80%',
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    customerAddress: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
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
        fontSize: 14,
        fontWeight: '600',
    },
    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    saveOptionsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    saveOptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveOptions: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
    },
    saveOption: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#292363',
    },
    saveOptionText: {
        color: '#292363',
        fontSize: 14,
        fontWeight: '600',
    },
    saveBtnContainer: {
        backgroundColor: '#292363',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 20,
    },
    saveBtnContent: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    map: {
        height: isTablet() ? 700 : 400,
        marginTop: 20,
    },
    btnMainContainer: {
        paddingHorizontal: 20,
    }
})

export default styles;