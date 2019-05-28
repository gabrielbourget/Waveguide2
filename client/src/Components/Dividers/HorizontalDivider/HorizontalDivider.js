import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './HorizontalDivider.module.scss';

class HorizontalDivider extends React.Component { 
	static propTypes = {
		height: PropTypes.string,
		color: PropTypes.string,
		subtle: PropTypes.bool
	};

	static defaultProps = {
		width: '100%',
		height: '3px',
		subtle: false
	};

	render() {
		const initObject = prepareComponent(this.context, this.props);

		const renderTimeStyles = {
			width: this.props.width,
			height: this.props.height
		};

		return ( <div className={ initObject.dividerClasses } style={ renderTimeStyles }></div>);
	}
}

const prepareComponent = (context, props) => {
	let themeClass;
	if (context === 'dark') {
		if (props.subtle) themeClass = styles.darkThemeSubtle;
		else themeClass =	styles.darkTheme
	}
	else if (context === 'light') {
		if (props.subtle) themeClass = styles.lightThemeSubtle;
		else themeClass = styles.lightTheme;
	}
	const dividerClasses = ClassNames(styles.horizontalDivider, themeClass);

	return { dividerClasses };
}

HorizontalDivider.contextType = ThemeContext;
export default HorizontalDivider;
