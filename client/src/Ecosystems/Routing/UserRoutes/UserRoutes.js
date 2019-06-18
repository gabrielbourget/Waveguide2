import React from 'react';
import { Route } from 'react-router-dom';

import AddUser from '../../User/AddUser/AddUser';
import UpdateUser from '../../User/UpdateUser/UpdateUser';
import UserSettings from '../../User/UserSettings/UserSettings';
import CenteringCradle from '../../../Components/Cradles/CenteringCradle/CenteringCradle';

const UserRoutes = () => (
	<React.Fragment>
		<Route 
			path='/adduser' 
			render={() => (
				<CenteringCradle>
					<AddUser shape='rounded'/>
				</CenteringCradle>
			)}
		/>

		<Route 
			path='/updateuser' 
			render={() => (
				<CenteringCradle>
					<UpdateUser shape='rounded'/>
				</CenteringCradle>
			)}
		/>
	</React.Fragment>
);

export default UserRoutes;
