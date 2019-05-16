/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ShiftingVerticalBarsLoader.module.scss';

class ShiftingVerticalBarsLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
		  <div className={ styles.loader }>
		    <div className={ styles.loadingBars }>
		      <div className={ initObject.barClasses }></div>
		      <div className={ initObject.barClasses }></div>
		      <div className={ initObject.barClasses }></div>
		      <div className={ initObject.barClasses }></div>
		      <div className={ initObject.barClasses }></div>
		    </div>
		  </div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const barClasses = ClassNames(styles.bar, themeClass);

	return { barClasses };
};

ShiftingVerticalBarsLoader.contextType = ThemeContext;
export default ShiftingVerticalBarsLoader;


