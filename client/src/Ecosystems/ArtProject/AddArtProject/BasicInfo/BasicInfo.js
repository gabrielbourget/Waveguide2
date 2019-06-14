import React from 'react';
import { Link } from 'react-router-dom';
// import ClassNames from 'classnames';

import LabelAndInput from '../../../../Components/LabelAndInput/LabelAndInput';
// import FilledButton from '../../Buttons/FilledButton/FilledButton';
import OutlineButton from '../../../../Components/Buttons/OutlineButton/OutlineButton';

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
					htmlFor='name'
					labelText='Name'
					type='text'
					name='name'
					placeholder='Name'
					value={ this.props.name }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='contactEmail'
					labelText='Contact Email'
					type='email'
					name='contactEmail'
					placeholder='Contact Email'
					value={ this.props.info.contactEmail }
					onChange={ this.props.onChange }
				/>				
			</div>
		);
	}
}

// const prepareComponent

export default BasicInfo;
