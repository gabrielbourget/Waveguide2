import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './Paragraph.module.scss';

class Paragraph extends React.Component {

	static propTypes = {
		fontSize: PropTypes.string
	}

	static defaultProps = {
		fontSize: '1.5rem'
	}

	render() {
		const initObject = prepareComponent(this.context);

		const renderTimeStyles = {
			fontSize: this.props.fontSize
		}

		return (
			<p 
				className={ initObject.paragraphClasses }
				style={ renderTimeStyles }
			>
				{ this.props.children }
			</p>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const paragraphClasses = ClassNames(styles.paragraph, themeClass);

	return { paragraphClasses };
};

Paragraph.contextType = ThemeContext;

export default Paragraph;
