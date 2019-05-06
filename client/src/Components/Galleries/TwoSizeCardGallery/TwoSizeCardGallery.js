import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './TwoSizeCardGallery.module.scss';

class TwoSizeCardGallery extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.galleryClasses }>
				{ this.props.children }
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const galleryClasses = ClassNames(styles.gallery, themeClass);

	return { galleryClasses };
};

TwoSizeCardGallery.contextType = ThemeContext;
export default TwoSizeCardGallery;
