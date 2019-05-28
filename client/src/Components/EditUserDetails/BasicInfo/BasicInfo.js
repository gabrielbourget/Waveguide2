import React from 'react';
import ClassNames from 'classnames';

import LabelAndInput from '../../LabelAndInput/LabelAndInput';

import styles from './BasicInfo.module.scss';

class BasicInfo extends React.Component {

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
		//const initObject = prepareComponent(this.state);

		return (
			<div className={ styles.basicInfo }>
				<h4>Basic Info</h4>
				<LabelAndInput 
					htmlFor='username'
					labelText='Username'
					type='text'
					name='username'
					placeholder='Username'
					value={ this.props.username }
					onChange={ this.props.saveToState }
				/>
				<LabelAndInput 
					htmlFor='email'
					labelText='Email'
					type='email'
					name='email'
					placeholder='Email'
					value={ this.props.info.email }
					onChange={ this.props.saveToState }
				/>
				<LabelAndInput 
					htmlFor='name'
					labelText='Name'
					type='text'
					name='name'
					placeholder='Name'
					value={ this.props.info.name }
					onChange={ this.props.saveToState }
				/>
				<LabelAndInput 
					htmlFor='firstName'
					labelText='First Name'
					type='text'
					name='firstName'
					placeholder='First Name'
					value={ this.props.info.firstName }
					onChange={ this.props.saveToState }
				/>
				<LabelAndInput 
					htmlFor='lastName'
					labelText='Last Name'
					type='text'
					name='lastName'
					placeholder='Last Name'
					value={ this.props.info.lastName }
					onChange={ this.props.saveToState }
				/>
				<LabelAndInput 
					htmlFor='city'
					labelText='City'
					type='text'
					name='city'
					placeholder='City'
					value={ this.props.info.city }
					onChange={ this.props.saveToState }
				/>				
			</div>
		);
	}
}

// const prepareComponent

export default BasicInfo;
