import React from 'react';

import TextArea from '../../../../Components/TextArea/TextArea';

import styles from './Description.module.scss';

class Description extends React.Component {

	state = {
		windowWidth: window.innerWidth
	};

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};	

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);
	render() {
		const prompt = `Description.`;
		
		return (
			<div className={ styles.description }>			
				<TextArea
					value={ this.props.value }
					placeholder={ prompt }
					onChange={ this.props.onChange }
					name={ this.props.name }
				/>
			</div>
		);
	}
}

export default Description;
