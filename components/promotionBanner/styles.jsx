import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet'

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: '100%',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: "10%"
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        width: isTablet() ? "30%" : '60%',
    },
    subTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#292363',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        width: 140,
    },
    btnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
    }
})

export default styles;