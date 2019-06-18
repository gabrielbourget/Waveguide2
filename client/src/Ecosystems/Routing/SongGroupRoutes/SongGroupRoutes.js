import React from 'react';
import { Route } from 'react-router-dom';

import AddSongGroup from '../../SongGroup/AddSongGroup/AddSongGroup';
import UpdateSongGroup from '../../SongGroup/UpdateSongGroup/UpdateSongGroup';

import CenteringCradle from '../../../Components/Cradles/CenteringCradle/CenteringCradle';

const SongGroupRoutes = () => (
	<React.Fragment>
		<Route
			path='/addsonggroup'
			render={() => (
				<CenteringCradle>
					<AddSongGroup shape='rounded'/>
				</CenteringCradle>
			)}
		/>

		<Route 
			path='/updatesonggroup'
			render={() => (
				<CenteringCradle>
					<UpdateSongGroup shape='rounded'/>
				</CenteringCradle>
			)}
		/>
	</React.Fragment>
);

export default SongGroupRoutes;
