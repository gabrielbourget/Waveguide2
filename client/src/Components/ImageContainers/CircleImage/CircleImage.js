import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import ProfileImage from '../ProfileImage/ProfileImage';

import styles from './CircleImage.module.scss';

class CircleImage extends React.Component {

	static propTypes = {
		radius: PropTypes.string
	};

	static defaultProps = {
		radius: '25px'
	}

	render() {

		console.log(this.props.radius);

		const renderTimeStyles = {
			height: `${this.props.radius}`,
			width: `${this.props.radius}`
		};

		console.log(renderTimeStyles);

		return (
			<div 
				className={ styles.circleImage }
				style={ renderTimeStyles }
			>
				<ProfileImage
					src={ this.props.src }
					alt={ this.props.alt }
				/>
			</div>
		);
	}
}

CircleImage.contextType = ThemeContext
export default CircleImage;
