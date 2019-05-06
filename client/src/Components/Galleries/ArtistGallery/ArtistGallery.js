import React from 'react';

import TwoSizeCardGallery from '../TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';

import styles from './ArtistGallery.module.scss';

class ArtistGallery extends React.Component {
	render() {
		return (
			<div className="artistGallery">
				<TwoSizeCardGallery>
					{
						this.props.artists.map((artist, i) => {
							key={ i }
							shape='round'
							name={ artist.name }
							src={ artist.imageURL }
							socialURL={ artist.socialURLs }
						});
					}
				</TwoSizeCardGallery>
			</div>
		);
	}
}

export default ArtistGallery;
