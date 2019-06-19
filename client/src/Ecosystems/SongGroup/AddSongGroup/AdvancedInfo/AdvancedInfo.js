import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
// import ClassNames from 'classnames';

import LabelAndInput from '../../../../Components/LabelAndInput/LabelAndInput';
// import FilledButton from '../../Buttons/FilledButton/FilledButton';
import OutlineButton from '../../../../Components/Buttons/OutlineButton/OutlineButton';

import Contributors from './Contributors/Contributors';

import styles from './AdvancedInfo.module.scss';

class AdvancedInfo extends React.Component {

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

		const currDate = new Date();

		return (
			<div className={ styles.advancedInfo }>
{/*				<DatePicker 
					selected={ currDate }
					onChange={ this.props.onChange }
				/>*/}
				<LabelAndInput 
					htmlFor='songGroup'
					labelText='Song Group'
					type='text'
					name='songGroup'
					placeholder='Song Group'
					value={ this.props.songGroup }
					onChange={ this.props.onChange }
				/>			
				<Contributors
					contributors={ this.props.info.contributors }
					onChange={ this.props.onChange }
				/>
			</div>
		);
	}
}

export default AdvancedInfo;
