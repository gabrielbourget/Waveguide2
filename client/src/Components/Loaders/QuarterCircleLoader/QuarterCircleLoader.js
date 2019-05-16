/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './QuarterCircleLoader.module.scss';

class QuarterCircleLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);
		return (
		  <div className={ styles.loader }>
		    <div className={ initObject.loadingQuarterCircleClasses }/>
		  </div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const loadingQuarterCircleClasses = ClassNames(styles.loadingQuarterCircle, themeClass);

	return { loadingQuarterCircleClasses };
};

QuarterCircleLoader.contextType = ThemeContext;
export default QuarterCircleLoader;		
