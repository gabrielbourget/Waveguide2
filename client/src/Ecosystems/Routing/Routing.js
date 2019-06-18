import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import Search from '../Search/Search';
import Settings from '../User/UserSettings/UserSettings';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import RequestReset from '../../Components/RequestReset/RequestReset';
import ResetPassword from '../../Components/ResetPassword/ResetPassword';
import ChangePassword from '../../Components/ChangePassword/ChangePassword';
import CenteringCradle from '../../Components/Cradles/CenteringCradle/CenteringCradle';
// import NotFoundPageComponent from '../../Components/NotFoundPageComponent/NotFoundPageComponent';

// - Component Development Imports
// import AddArtProject from '../ArtProject/AddArtProject/AddArtProject';
// import UpdateArtProject from '../ArtProject/UpdateArtProject/UpdateArtProject';
// import SmallArtProjectCard from '../../Components/Cards/SmallArtProjectCard/SmallArtProjectCard';
// import { artProjects } from '../../Datasets/artProjects';
import LaggingLinesLoader from '../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
// import HorizontalBubblesLoader from '../../Components/Loaders/HorizontalBubblesLoader/HorizontalBubblesLoader';
// import CircleBubblesLoader from '../../Components/Loaders/CircleBubblesLoader/CircleBubblesLoader';
// import CircleSpokesLoader from '../../Components/Loaders/CircleSpokesLoader/CircleSpokesLoader';
// import ShiftingVerticalBarsLoader from '../../Components/Loaders/ShiftingVerticalBarsLoader/ShiftingVerticalBarsLoader';
// import CircleLoader from '../../Components/Loaders/CircleLoader/CircleLoader';
// import QuarterCircleLoader from '../../Components/Loaders/QuarterCircleLoader/QuarterCircleLoader';

// - Internal Routing Components
import UserRoutes from './UserRoutes/UserRoutes';
import ArtProjectRoutes from './ArtProjectRoutes/ArtProjectRoutes';
import SongRoutes from './SongRoutes/SongRoutes';
import SongGroupRoutes from './SongGroupRoutes/SongGroupRoutes';

const Routes = () => (
  <React.Fragment>
    <Route path='/' exact component={ HomePage }/>
    <Route path='/search' component ={ Search }/>
    <Route path='/settings' component = { Settings }/>

    <Route
      path='/login'
      render={ () => (
        <CenteringCradle>
          <Login shape='rounded'/>
        </CenteringCradle>
      )}
    />

    <Route
      path='/register'
      render={ () => (
        <CenteringCradle>
          <Register shape='rounded'/>
        </CenteringCradle>
      )}
    />

    <Route 
      path='/forgotpassword'
      render={ () => (
        <CenteringCradle>
          <RequestReset shape='rounded' />
        </CenteringCradle>
      )}
    />

    <Route 
      path='/resetpassword'
      render={ () => (
        <CenteringCradle>
          <ResetPassword shape='rounded' />
        </CenteringCradle>
      )}
    />

    <Route 
      path='/changepassword'
      render={ () => (
        <CenteringCradle>
          <ChangePassword shape='rounded' />
        </CenteringCradle>
      )}
    />        

    <UserRoutes />
    <ArtProjectRoutes />
    <SongRoutes />
    <SongGroupRoutes />

    <Route 
      path='/componentdevplayground'
      render={ () => (
        <CenteringCradle>
          <LaggingLinesLoader/>
        </CenteringCradle>
      )}
    />

    {/*<Route render={ ({ location }) => <NotFoundPageComponent/> }/>*/}
  </React.Fragment>
					
);

export default Routes;
