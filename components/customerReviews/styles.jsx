import { StyleSheet } from 'react-native';
import isTablet from '../../hooks/isTablet';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    rating: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '600',
        color: '#000',
        marginLeft: 10,
    },
    review: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: '#000',
        opacity: 0.8,
        marginTop: 10,
    },
    reviews: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '400',
        color: '#000',
        marginLeft: 10,
        opacity: 0.5,
    },
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    title: {
        fontSize: isTablet() ? 22 : 18,
        fontWeight: '600',
        color: '#000',
    },
    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    reviewContainer: {
        marginVertical: 10,
    },
    reviewDate: {
        fontSize: isTablet() ? 16 : 12,
        fontWeight: '400',
        color: '#000',
        opacity: 0.7,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    reviewImage: {
        width: 60,
        height: 60,
        borderRadius: 60,
        objectFit: 'cover',
    },
    reviewName: {
        fontSize: isTablet() ? 18 : 14,
        fontWeight: '600',
        color: '#000',
    },
    reviewRating: {
        fontSize: isTablet() ? 20 : 16,
        fontWeight: '400',
        color: '#000',
        opacity: 0.7,
    },
    ratingContainer: {
        marginLeft: 20
    }
})

export default styles;