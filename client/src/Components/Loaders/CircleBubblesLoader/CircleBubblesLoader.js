/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CircleBubblesLoader.module.scss';

class CircleBubblesLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
		  <div className={ styles.loader }>
		    <div className={ styles.loadingSpinningBubbles }>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		      <div className={ styles.bubbleContainer }>
		        <div className={ initObject.bubbleClasses }></div>
		      </div>
		    </div>
		  </div>			
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const bubbleClasses = ClassNames(styles.bubble, themeClass);

	return { bubbleClasses };
};

CircleBubblesLoader.contextType = ThemeContext;
export default CircleBubblesLoader;
