import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './Notification.module.scss';

class Notification extends React.Component {
	render() {
		const initObject = prepareComponent(this.context, this.props);

		return (
			<div className={ initObject.notificationClasses }>
				
			</div>
		);
	}
}

const prepareComponent = (context, { shape }) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (shape === 'rounded') ? styles.rounded : null;

	const notificationClasses = ClassNames(styles.notification, themeClass, shapeClass);

	return { notificationClasses };
};

Notification.contextType = ThemeContext;
export default Notification;
