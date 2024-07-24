import { Dimensions } from 'react-native';

const isTablet = () => {
    const { width, height } = Dimensions.get('window');
    const aspectRatio = height / width;
    console.log(aspectRatio);

    return aspectRatio < 1.6;
};

export default isTablet;
