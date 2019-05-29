import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import styles from './TextArea.module.scss';

class TextArea extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
			<textarea 
				className={ initObject.textAreaClasses }
				placeholder={ this.props.placeholder }
				value={ this.props.value }
				name={ this.props.name }
				onChange={ this.props.onChange }
			/>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const textAreaClasses = ClassNames(styles.textArea, themeClass);

	return { textAreaClasses };
}

TextArea.contextType = ThemeContext;
export default TextArea;
