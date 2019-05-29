import React from 'react';
import { Link } from 'react-router-dom';
// import ClassNames from 'classnames';

import LabelAndInput from '../../LabelAndInput/LabelAndInput';
// import FilledButton from '../../Buttons/FilledButton/FilledButton';
import OutlineButton from '../../Buttons/OutlineButton/OutlineButton';

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
				<LabelAndInput 
					htmlFor='username'
					labelText='Username'
					type='text'
					name='username'
					placeholder='Username'
					value={ this.props.username }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='email'
					labelText='Email'
					type='email'
					name='email'
					placeholder='Email'
					value={ this.props.info.email }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='name'
					labelText='Name'
					type='text'
					name='name'
					placeholder='Name'
					value={ this.props.info.name }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='firstName'
					labelText='First Name'
					type='text'
					name='firstName'
					placeholder='First Name'
					value={ this.props.info.firstName }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='lastName'
					labelText='Last Name'
					type='text'
					name='lastName'
					placeholder='Last Name'
					value={ this.props.info.lastName }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='city'
					labelText='City'
					type='text'
					name='city'
					placeholder='City'
					value={ this.props.info.city }
					onChange={ this.props.onChange }
				/>
				<Link to='/changepassword'>
					<OutlineButton 
						text='Change Password'
						onClick={ () => {} }
					/>			
				</Link>
			</div>
		);
	}
}

// const prepareComponent

export default BasicInfo;
