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
		return (
			<div className={ styles.basicInfo }>
				<LabelAndInput 
					htmlFor='title'
					labelText='Title'
					type='text'
					name='title'
					placeholder='Title'
					value={ this.props.info.title }
					onChange={ this.props.onChange }
				/>
				{/* 
						- TODO -> Restrict selection range to those corresponding to keysig enums. 
											Provide a way to toggle between normal note notation and camelot
											notation.
				*/}
				<LabelAndInput 
					htmlFor='keySignature'
					labelText='Key Signature'
					type='text'
					name='keySignature'
					placeholder='Key Signature'
					value={ this.props.info.keySignature }
					onChange={ this.props.onChange }
				/>
				<LabelAndInput 
					htmlFor='tempo'
					labelText='Tempo (bpm)'
					type='text'
					name='tempo'
					placeholder='Tempo'
					value={ this.props.info.tempo }
					onChange={ this.props.onChange }
				/>
			</div>
		);
	}
}

export default BasicInfo;
