import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ColorPropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from "react-native-expo-image-cache";
import PropTypes from 'prop-types';

import CachedImage from '../CachedImage/CachedImage'

import styles from './AvatarImageStyles'

const AvatarImage = ({
    uri,
    preview,
    onPress
}) => {

    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image
                    {...{preview,uri}}
                    style={styles.avatar}
                />
            </ImageComponent>
        </View>
    );
}

export default AvatarImage

AvatarImage.propTypes = {
    uri: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

AvatarImage.defaultProps = {
    onPress: null,
};
