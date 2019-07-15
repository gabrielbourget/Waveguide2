import React from 'react';
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
				<LabelAndInput 
					htmlFor='duration'
					labelText='Duration (minutes:seconds)'
					type='duration'
					name='duration'
					placeholder='Duration'
					value={ this.props.info.duration }
					onChange={ this.props.onChange }
				/>
			</div>
		);
	}
}

export default BasicInfo;