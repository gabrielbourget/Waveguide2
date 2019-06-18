import React from 'react';
import { Route } from 'react-router-dom';

import AddArtProject from '../../ArtProject/AddArtProject/AddArtProject';
import UpdateArtProject from '../../ArtProject/UpdateArtProject/UpdateArtProject';
import SingleArtProject from '../../ArtProject/SingleArtProject/SingleArtProject';

import CenteringCradle from '../../../Components/Cradles/CenteringCradle/CenteringCradle';

const ArtProjectRoutes = () => (
	<React.Fragment>
		<Route
			path='/addartproject'
			render={() => (
				<CenteringCradle>
					<AddArtProject shape='rounded'/>
				</CenteringCradle>
			)}
		/>

		<Route 
			path='/updateartproject'
			render={() => (
				<CenteringCradle>
					<UpdateArtProject shape='rounded'/>
				</CenteringCradle>
			)}
		/>

    <Route 
      //path={`${matchPath}/:artProjectId`}
      path='/artproject/:artProjectId'
      render={ ({ match }) => {
        const id = match.params.artProjectId;

        return (
          <SingleArtProject id={ id } />
        );
      }}
    />		
	</React.Fragment>
);

export default ArtProjectRoutes;

