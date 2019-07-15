import { View, StyleSheet } from 'react-native';
import * as React from 'react';

import { spacing } from '../../../GlobalStyles/spacing'

class CenteringCradle extends React.Component { 
    render() {
        console.log(spacing);

        return (
            <View style={ styles.cradle }>
                { this.props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cradle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 5
    }

});

export default CenteringCradle;