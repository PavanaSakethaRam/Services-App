import { StyleSheet, Dimensions } from 'react-native';
const windowSize = Dimensions.get('window');
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginTop: 20,
    },
    background: {
        position: 'absolute',
        bottom: "70%",
        height: '100%',
        width: '110%',
        backgroundColor: "#D4D3E0",
    },
    imageContainer: {
        marginTop: isTablet() ? windowSize.height / 5.4 : windowSize.height / 7,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    imageEditIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: isTablet() ? "43%" : "40%",
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 50,
    },
    nameContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: isTablet() ? 28 : 24,
        fontWeight: '600',
        color: '#000',
    },
    mobile: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
    },
    optionsContainer: {
        marginTop: 65,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    optionTitle: {
        fontSize: isTablet() ? 24 : 20,
        fontWeight: '500',
        color: '#000',
        marginLeft: 20,
    },
    optionLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionLanguageTitle: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#292363',
    },
});

export default styles;