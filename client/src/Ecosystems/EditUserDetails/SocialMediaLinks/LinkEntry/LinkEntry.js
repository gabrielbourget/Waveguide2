import React from 'react';

import LabelAndInput from '../../../LabelAndInput/LabelAndInput';

import { supportedNetworks } from './helpers';
import styles from './LinkEntry.module.scss';

class LinkEntry extends React.Component {
	render() {
		return (
			<div className={ styles.linkEntry }>
				<select name="networkPicker">
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
				/>			
			</div>
		);
	}
}

export default LinkEntry;
