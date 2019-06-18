import React from 'react';
import { Route } from 'react-router-dom';

import AddSong from '../../Song/AddSong/AddSong';
import UpdateSong from '../../Song/UpdateSong/UpdateSong';

import CenteringCradle from '../../../Components/Cradles/CenteringCradle/CenteringCradle';

const SongRoutes = () => (
	<React.Fragment>
		<Route
			path='/addsong'
			render={() => (
				<CenteringCradle>
					<AddSong shape='rounded'/>
				</CenteringCradle>
			)}
		/>

		<Route 
			path='/updatesong'
			render={() => (
				<CenteringCradle>
					<UpdateSong shape='rounded'/>
				</CenteringCradle>
			)}
		/>
	</React.Fragment>
);

export default SongRoutes;
