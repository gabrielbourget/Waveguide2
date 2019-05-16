import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './FromTheTopCradle.module.scss';

class FromTheTopCradle extends React.Component {

	static propTypes = {
		stretch: PropTypes.string
	};

	static defaultProps = {
		stretch: 'true'
	}

	render() {
		const initObject = prepareComponent(this.context, this.props);

		return (
			<div className={ initObject.cradleClasses }>
				{ this.props.children }
			</div>
		);
	}
}

const prepareComponent = (context, props) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const stretchClass = (props.stretch === 'true') ? styles.stretch : null;
	const cradleClasses = ClassNames(styles.cradle, themeClass);

	return { cradleClasses }
};

FromTheTopCradle.contextType = ThemeContext;

export default FromTheTopCradle;
