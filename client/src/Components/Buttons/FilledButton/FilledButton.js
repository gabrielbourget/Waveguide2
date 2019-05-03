import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FilledButton.module.scss';

class Filledbutton extends React.Component {

	handleClick = () => {
		this.props.onClick();
	}	
	
	static propTypes = {
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render() {
		const initObject = this.prepareComponent();

		return (
			<button
				className={ initObject.buttonClasses }
				onClick={ this.handleClick }
			>
				<p className={ initObject.buttonTextClasses }>
					{ this.props.text }
				</p>
			</button>
		);
	};

}

const prepareComponent = () => {
	const shapeClass = (this.props.shape === 'rounded') ? styles.rounded : null;
	const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const buttonClasses = ClassNames(styles.button, shapeClass, themeClass);
	const buttonTextClasses = ClassNames(styles.buttonText, themeClass);

	return {
		buttonClasses,
		buttonTextClasses
	};
};


FilledButton.contextType = ThemeContext;
export default FilledButton;
