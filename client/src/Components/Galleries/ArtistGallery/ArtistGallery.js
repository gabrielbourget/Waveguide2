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
						this.props.artProjects.map((artProject) => (
							<TwoSizeCard
								key={ artProject.id }
								shape='round'
								name={ artProject.name }
								src={ artProject.imageURL }
								socialURL={ artProject.socialMediaLinks }
							/>
						))
					}
				</TwoSizeCardGallery>
			</div>
		);
	}
}

export default ArtistGallery;
