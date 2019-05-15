import React from 'react';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';

import styles from './SmallArtProjectCard.module.scss';

class SmallArtProjectCard extends React.Component {
	render() {
		const initObject = prepareComponent(this.context, this.props);
		const { artProject } = this.props;

		return (
			<div className={ initObject.cardClasses }>
				<ProfileImage src={ artProject.imageURL } title={ artProject.name }/>
				<div className={ styles.info }>
					<div className="title">
						<h2 style={{ 'textDecoration': 'underline' }}>{ artProject.name }</h2>
					</div>
					<div className="type">
						<h4>Art Project</h4>
					</div>
				</div>
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