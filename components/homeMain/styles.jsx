import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '100%',
        height: 270,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 40,
        borderRadius: 16,
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 20,
        color: '#000',
    },
    input: {
        flex: 1,
    },
    searchIcon: {
        marginRight: 10,
    },
    mainText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        width: '80%',
    },
    btn: {
        height: 40,
        width: 130,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnContent: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    }
})

export default styles;