import React from 'react';

import styles from './CoverImage.module.scss';

class CoverImage extends React.Component {
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

export default CoverImage;
