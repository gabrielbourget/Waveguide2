/**
 *  Inspired by Filipe Kiss
 *  Original Codepen: -> https://codepen.io/filipekiss/pen/yJxFo
 */

import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CircleSpokesLoader.module.scss';

class CircleSpokesLoader extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
		  <div className={ styles.loader }>
		    <div className={ styles.loadingSpokes }>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		      <div className={ styles.spokeContainer }>
		        <div className={ initObject.spokeClasses }></div>
		      </div>
		    </div>
		  </div>			
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const spokeClasses = ClassNames(styles.spoke, themeClass);

	return { spokeClasses };
};

CircleSpokesLoader.contextType = ThemeContext;
export default CircleSpokesLoader;
