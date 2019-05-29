import React from 'react';

import TextArea from '../../TextArea/TextArea';

class Biography extends React.Component {

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
		return (
			<TextArea
				value={ this.props.value }
				placeholder='Write a biography here'
				onChange={ this.props.onChange }
				name={ this.props.name }
			/>
		);
	}
}

export default Biography;
