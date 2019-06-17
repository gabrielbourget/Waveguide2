import React from 'react';

import LabelAndInput from '../LabelAndInput/LabelAndInput';

import { supportedNetworks } from '../../Helpers/generalDataStructures';
import styles from './LinkEntry.module.scss';

class LinkEntry extends React.Component {

	state = {
		network: 'Soundcloud',
		link: ''
	}

	render() {

		// console.log(this.props.onChange);

		return (
			<div className={ styles.linkEntry }>
				<select 
					name="networkPicker"
					value={ this.props.network }
					onChange={ this.props.onChange }
				>
					{
						Object.keys(supportedNetworks).map((key, i) => {
							//const selected = (key === this.props.network) ? 'selected' : null;

							return (
								<option 
									value={ key }
									key={ i }
									//selected={ selected }
								>
									{ supportedNetworks[key] }
								</option>
							);
						})
					}
				</select>
				<LabelAndInput 
					htmlFor='link'
					labelText='Link'
					type='text'
					name='link'
					placeholder='Link'
					value={ this.props.link }
					onChange={ this.props.onChange }
				/>			
			</div>
		);
	}
}

export default LinkEntry;
