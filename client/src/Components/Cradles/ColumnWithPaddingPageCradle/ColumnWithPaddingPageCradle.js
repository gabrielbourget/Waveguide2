import React from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ColumnWithPaddingPageCradle.module.scss';

class ColumnWithPaddingPageCradle extends React.Component {

	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.cradleClasses }>
				{ this.props.children }
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const cradleClasses = ClassNames(styles.cradle, themeClass);

	return { cradleClasses }
}

ColumnWithPaddingPageCradle.contextType = ThemeContext;

export default ColumnWithPaddingPageCradle;
