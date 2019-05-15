/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './LaggingLinesLoader.module.scss';

class LaggingLinesLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return(
		  <div className={ styles.loader }>
		    <div className={ styles.loadingSlide }>
		      <div className={ initObject.slideClasses }></div>
		      <div className={ initObject.slideClasses }></div>
		      <div className={ initObject.slideClasses }></div>
		    </div>
		  </div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const slideClasses = ClassNames(styles.slide, themeClass);

	return { slideClasses };
};

LaggingLinesLoader.contextType = ThemeContext;
export default LaggingLinesLoader;
