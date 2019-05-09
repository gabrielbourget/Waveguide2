import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './OutlineButton.module.scss';

class OutlineButton extends React.Component {
	handleClick = () => {
		this.props.onClick();
	};

	static propTypes = {
		text: PropTypes.string.isRequired
	}

	render() {
		const initObject = prepareComponent(this.props, this.context);

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

const prepareComponent = (props, context) => {
	const shapeClass = (props.shape === 'rounded') ? styles.rounded : null;
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const buttonClassNames = ClassNames(styles.button, shapeClass, themeClass);
	const buttonTextClassNames = ClassNames(styles.buttonText, themeClass);

	return {
		buttonClassNames,
		buttonTextClassNames
	}
}

OutlineButton.contextType = ThemeContext;
export default OutlineButton;
