import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './OutlineButton.module.scss';

class OutlineButton extends React.Component {
	handleClick = () => {
		this.props.onClick();
	};

	static PropTypes = {
		text: PropTypes.string.isRequired;
	}

	render() {
		const initObject = prepareComponent();

		return (
			<button
				className={ initObject.buttonClassNames }
				onClick={ this.handleClick }
			>
				<span className={ initObject.buttonTextClassNames }>
					{ this.props.text }
				</span>
			</button>
		);
	}
}

const prepareComponent = () => {
	const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null;
	const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const floatClass = (this.props.float) ? styles.float : null;

	const buttonClassNames = ClassNames(styles.button, shapeClass, themeClass);
	const buttonTextClassNames = ClassNames(styles.buttonText, themeClass);

	return {
		buttonClassNames,
		buttonTextClassNames
	}
}

OutlineButton.contextType = ThemeContext;
export default OutlineButton;
