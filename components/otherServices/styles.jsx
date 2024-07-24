import { StyleSheet } from 'react-native'
import isTablet from '../../hooks/isTablet'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 35,
    },
    image: {
        width: "100%",
        height: 98,
        marginBottom: 12,
    },
    itemTitle: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '600',
        marginBottom: 5,
    },
    title: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    listContainer: {
        width: 105,
        height: 195,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    btnContainer: {
        width: 105,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
        borderColor: '#292363',
        borderWidth: 1,
    },
    addToCartBtn: {
        fontSize: 12,
        fontWeight: '600',
        color: '#292363',
    },
    seeAllBtn: {
        fontSize: isTablet() ? 18 : 14
    }
})

export default styles