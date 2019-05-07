import React from 'react';
import PropTypes from 'prop-types';

class TextIndent extends React.Component {

	static propTypes = {
		direction: PropTypes.string,
		amount: PropTypes.string
	};

	static defaultProps = {
		direction: 'leftToRight',
		amount: '30px'
	};

	directionSwitch = () => {
		if (this.props.direction === 'leftToRight') {
			return (
				<span style={ { paddingLeft: this.props.amount } }>
					{ this.props.children }
				</span>
			)
		}
		if (this.props.direction === 'rightToLeft') {
			return (
				<span style={ { paddingRight: this.props.amount } }>
					{ this.props.children }
				</span>
			)
		}	
	};

	render() {
		return this.directionSwitch(); 
	}
	
}

export default TextIndent;
