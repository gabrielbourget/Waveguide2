/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CircleLoader.module.scss';

class CircleLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);
		return (
		  <div className={ styles.loader }>
		    <div className={ initObject.loadingCircleClasses }/>
		  </div>		
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const loadingCircleClasses = ClassNames(styles.loadingCircle, themeClass);

	return { loadingCircleClasses };
};

CircleLoader.contextType = ThemeContext;
export default CircleLoader;		
