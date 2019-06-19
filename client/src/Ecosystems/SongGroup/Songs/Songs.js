import React from 'react';

import FilledButton from '../../../Components/Buttons/FilledButton/FilledButton';

import styles from './Songs.module.scss';

class Songs extends React.Component {

	renderLogic = (props) => {

		const { songs } = props;

		if (songs.length === 0) {
			return (
				<div className={ styles.noSongs }>
					<FilledButton 
						text='Add a Song'
						onClick={ () => {} }
					/>
				</div>
			);
		}

		return (
			<div>boop</div>
		);
	}

	render() {
		return (
			<div className={ styles.songs }>
				{ this.renderLogic(this.props) }
			</div>
		);
	}
}

export default Songs;
