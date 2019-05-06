import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './SelectionIndicator.module.scss';

class SelectionIndicator extends React.Component {
	state = {
		selected: false
	};

	static propTypes = {
		shape: PropTypes.string
	};

	static defaultProps = {
		shape: 'roundedSquare'
	};

	handleClick = () => {
		this.setState({
			selected: !(this.state.selected)
		});
	};

	render() {
		const initObject = prepareComponent(this.context, this.state);

		return (
			<div className={ initObject.borderClassNames } onClick={ this.handleClick }>
				<div className={ initObject.insideClssNames }/>
			</div>
		);
	};
}

const prepareComponent = (context, state) => {
	const selectedClass = state.selected ? styles.selected : null;
	const shapeClass = this.determineShapeClass();
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const borderClassNames = ClassNames(styles.border, selectedClass, themeClass);
	const insideClassNames = ClassNames(styles.inside, selectedClass, themeClass);

	return { 
		borderClassNames,
		insideClassNames
	}
};

const determineShapeClass = () => {
	switch (this.props.shape) {
		case 'square': return styles.square;
		case 'roundedSquare': return styles.roundedSquare;
		case 'round': return styles.round;
		default: return styles.roundedSquare;
	}
};

SelectionIndicator.contextType = ThemeContext;

export default SelectionIndicator;
