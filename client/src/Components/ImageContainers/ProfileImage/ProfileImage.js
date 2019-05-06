import React from 'react';

import styles from './ProfileImage.module.scss';

class ProfileImage extends React.Component {
	// - TODO -> Create fallback SVG icon for missing src scenario.

	render() {
		return (
			<img 
				src={ this.props.src } 
				alt={ this.props.title }
				className={ styles.image }
			/>
		);
	};
}

export default ProfileImage;
