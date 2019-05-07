import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FilledButton.module.scss';

class FilledButton extends React.Component {

	handleClick = () => {
		this.props.onClick();
	}	
	
	static propTypes = {
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render() {
		const initObject = this.prepareComponent(this.context, this.props);

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

const prepareComponent = (context, props) => {
	const shapeClass = (props.shape === 'rounded') ? styles.rounded : null;
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const buttonClasses = ClassNames(styles.button, shapeClass, themeClass);
	const buttonTextClasses = ClassNames(styles.buttonText, themeClass);

	return {
		buttonClasses,
		buttonTextClasses
	};
};


FilledButton.contextType = ThemeContext;
export default FilledButton;
