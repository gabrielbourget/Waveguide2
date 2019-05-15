import React from 'react';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './SmallArtProjectCard.module.scss';

class SmallArtProjectCard extends React.Component {
	render() {
		const initObject = prepareComponent(this.context, this.props);
		const { artist } = this.props;

		return (
			<div className={ initObject.cardClasses }>
				
			</div>
		);
	}
}

const prepareComponent = (context, props) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const roundedClass = (props.shape === 'rounded') ? styles.rounded : null;
	const cardClasses = ClassNames(styles.card, themeClass, roundedClass);

	return { 
		cardClasses,

	};
};

SmallArtProjectCard.contextType = ThemeContext;
export default SmallArtProjectCard;
