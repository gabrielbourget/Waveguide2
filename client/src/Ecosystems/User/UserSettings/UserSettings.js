import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './UserSettings.module.scss';

class Settings extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.settingsCradleClasses }>
				<div className={ initObject.settingsClasses }>
					<h1>Settings</h1>
				</div>
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const settingsCradleClasses = ClassNames(styles.settingsCradle, themeClass);
	const settingsClasses = ClassNames(styles.settings, themeClass);

	return { 
						settingsCradleClasses,
						settingsClasses
				 };
}

Settings.contextType = ThemeContext;
export default Settings;
