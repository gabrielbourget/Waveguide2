import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import styles from './LabelAndInput.module.scss';

class LabelAndInput extends React.Component {

	static propTypes = {
		htmlFor: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired
	};

	render() {
		const initObject = prepareComponent(this.context);

		return (
			<label 
				className={ initObject.labelClasses }
				htmlFor={ this.props.htmlFor }
			>
				{ this.props.labelText }
				<input 
					className={ initObject.inputClasses }
					type={ this.props.type }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					value={ this.props.email }
					onChange={ this.props.onChange }
				/>
			</label>			
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const labelClasses = ClassNames(styles.label, themeClass);
	const inputClasses = ClassNames(styles.input, themeClass);

	return {
		labelClasses,
		inputClasses
	};
};

LabelAndInput.contextType = ThemeContext;
export default LabelAndInput;
