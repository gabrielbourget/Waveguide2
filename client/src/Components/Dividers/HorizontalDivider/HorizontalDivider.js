import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './HorizontalDivider.module.scss';

class HorizontalDivider extends React.Component { 
	static propTypes = {
		height: PropTypes.string
		color: PropTypes.string
	};

	static defaultProps = {
		width: '100%';
		height: '3px'
	};

	render() {
		const renderTimeStyle = {
			width: this.props.width,
			height: this.props.height
		};

		return ( <div className="dividerClasses" style={ style }></div>);
	}
}

const prepareComponent = () => {
	const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const dividerClasses = ClassNames(styles.horizontalDivider, themeClass);

	return { dividerClasses };
}

HorizontalDivider.contextType = ThemeContext;

export default HorizontalDivider;
