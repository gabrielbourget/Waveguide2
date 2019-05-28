import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './VerticalDivider.module.scss';

class VerticalDivider extends React.Component {
	static propTypes = { 
		width: PropTypes.string,
		height: PropTypes.string,
		subtle: PropTypes.bool
	};

	static defaultProps = {
		width: '3px',
		height: '100%',
		subtle: false
	};

	render() {
		const renderTimeStyle = {
			width: this.props.width,
			height: this.props.height
		};

		const initObject = prepareComponent(this.context, this.props);

		return ( <div className="dividerClasses" style={ renderTimeStyle }></div> ); 
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
	const dividerClasses = ClassNames(styles.verticalDivider, themeClass);

	return { dividerClasses };
}

VerticalDivider.contextType = ThemeContext;

export default VerticalDivider;
