import React from 'react';

import FilledButton from '../../../Components/Buttons/FilledButton/FilledButton';
import Song from './Song/Song';

import styles from './Songs.module.scss';

// - Mocking some title for now.
const songData = [
	{ title: 'Song 1' },
	{ title: 'Song 2' },
	{ title: 'Song 3' }
];

class Songs extends React.Component {

	renderLogic = (props) => {

		const { songs } = props;

		// if (songs.length === 0) {
		// 	return (
		// 		<div className={ styles.noSongs }>
		// 			<FilledButton 
		// 				text='Add a Song'
		// 				onClick={ () => {} }
		// 			/>
		// 		</div>
		// 	);
		// }

		return (
			songData.map((song, i) => (
				<Song title={ song.title } key={ i } />
			))
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
