import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ToTheLeftCradle.module.scss';

class ToTheLeftCradle extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.cradleClasses }>
				{ this.props.children }
			</div>
		);
	}
}

const prepareComponent(context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const cradleClasses = ClassNames(styles.cradle, themeClass);

	return { cradleClasses };
}

ToTheLeftCradle.contextType = ThemeContext;

export default ToTheLeftCradle;
