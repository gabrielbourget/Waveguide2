import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './VerticalDivider.module.scss';

class VerticalDivider extends React.Component {
	static propTypes = { 
		width: PropTypes.string,
		height: PropTypes.string
	};

	static defaultProps = {
		width: '3px';
		height: '100%'
	}

	render() {
		const renderTimeStyle = {
			width: this.props.width,
			height: this.props.height
		};

		const initObject = prepareComponent();

		return ( <div className="dividerClasses" style={ renderTimeStyle }></div> ); 
	}
}

const prepareComponent = () => {
	const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const dividerClasses = ClassNames(styles.verticalDivider, themeClass);

	return { dividerClasses };
};

VerticalDivider.contextType = ThemeContext;

export default VerticalDivider;
