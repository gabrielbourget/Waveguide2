import React from 'react';
import { Image } from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';

export default class CachedImage extends React.Component {

    state = {
        src: null
    }

    componentDidMount = async () => {
        const { uri } = this.props.source
        const name = shorthash.unique(uri)
        // - TODO -> Discuss how to anticipate and intercept image file extensions
        //           and how to build different paths.
        const path = `${FileSystem.cacheDirectory}${name}`
        let image

        try {
            image = await FileSystem.getInfoAsync(path)
        } catch (err) {
            console.log(`Error -> ${err}`)
        }
        
        // - Image has been cached already.
        if (image.exists) {
            console.log('Read Image from cache')
            this.setState({
                src: { uri: image.uri }
            })
            return
        }

        // - Image has not been cached yet.
        console.log('Downloading image to cache')
        try {
            const newImage = await FileSystem.downloadAsync(uri, path);
            this.setState({
                src: { uri: newImage.uri }
            })
        } catch(err) {
            console.log(`Error -> ${err}`)
        }
    }

    render() {
        return (
            <Image 
                style={ this.props.style }
                source={ this.state.src }
            />
        );
    }
}