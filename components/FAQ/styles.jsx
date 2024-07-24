import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '400',
        paddingRight: 20,
    },
    content: {
        padding: 10,
    },
    contentText: {
        fontSize: isTablet() ? 18 : 14,
        color: '#000',
        opacity: 0.6,
    },
    title: {
        color: "#000",
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        marginBottom: isTablet() ? 20 : 10,
    }
});

export default styles;