import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CenteringCradle.module.scss';

class CenteringCradle extends React.Component {

	static propTypes = {
		stretch: PropTypes.string
	};

	static defaultProps = {
		stretch: 'true'
	}

	render() {
		const initObject = prepareComponent(this.context, this.props);
		// console.log(this.context);

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
	const cradleClasses = ClassNames(styles.cradle, themeClass, stretchClass);

	return { cradleClasses }
}

CenteringCradle.contextType = ThemeContext;

export default CenteringCradle;
