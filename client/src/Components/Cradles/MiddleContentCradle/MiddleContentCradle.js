import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './MiddleContentCradle.module.scss';

class MiddleContentCradle extends React.Component {

	render() {
		const initObject = prepareComponent();

		return (
			<div className={ initObject.cradleClasses }>
				{ this.props.children }
			</div>
		);
	}
}

const prepareComponent = () => {
	const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const cradleClasses = ClassNames(styles.cradle, themeClass);

	return { cradleClasses };
};

MiddleContentCradle.contextType = ThemeContext;

export default MiddleContentCradle;
