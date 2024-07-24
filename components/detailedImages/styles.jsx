import { StyleSheet } from "react-native";
import isTablet from "../../hooks/isTablet";

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageContainer: {
        width: isTablet() ? 700 : 400,
        height: 300,
        paddingLeft: 10,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#1f1f1f',
        marginHorizontal: 4,
    },
});

export default styles;