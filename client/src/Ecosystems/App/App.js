import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import { CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import { BACKDROP_OPEN_QUERY } from '../../GraphQL/Queries';

import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Backdrop from '../../Components/Backdrop/Backdrop';
import NotFoundPageComponent from '../../Components/NotFoundPageComponent/NotFoundPageComponent';
import HomePage from '../HomePage/HomePage';
import Search from '../Search/Search';
import SingleArtProject from '../SingleArtProject/SingleArtProject';
import Settings from '../Settings/Settings';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import RequestReset from '../../Components/RequestReset/RequestReset';

// - Component Development Imports
import CenteringCradle from '../../Components/Cradles/CenteringCradle/CenteringCradle';
// import SmallArtProjectCard from '../../Components/Cards/SmallArtProjectCard/SmallArtProjectCard';
// import { artProjects } from '../../Datasets/artProjects';
// import LaggingLinesLoader from '../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
// import HorizontalBubblesLoader from '../../Components/Loaders/HorizontalBubblesLoader/HorizontalBubblesLoader';
import CircleBubblesLoader from '../../Components/Loaders/CircleBubblesLoader/CircleBubblesLoader';
// import CircleSpokesLoader from '../../Components/Loaders/CircleSpokesLoader/CircleSpokesLoader';
// import ShiftingVerticalBarsLoader from '../../Components/Loaders/ShiftingVerticalBarsLoader/ShiftingVerticalBarsLoader';
// import CircleLoader from '../../Components/Loaders/CircleLoader/CircleLoader';
// import QuarterCircleLoader from '../../Components/Loaders/QuarterCircleLoader/QuarterCircleLoader';

import styles from './App.module.css';

const Composed = adopt ({
  currTheme: ({ render }) => <Query query={ CURRENT_THEME_QUERY }>{ render }</Query>,
  backdropOpen: ({ render }) => <Query query={ BACKDROP_OPEN_QUERY }>{ render }</Query>
})

class App extends React.Component {

  componentDidMount() {
    // const clientDateTime = new Date();
    // const hour = clientDateTime.getHours();
    // ( hour > 7 && hour < 21 ) ? this.props.switchTheme('light') : this.props.switchTheme('dark');
  }

  render() {

    const matchedPath = this.props.match;

    return (
      <Composed>
        {
          ({ currTheme, backdropOpen }) => {
            // data.theme = 'light'
            const themeClass = (currTheme.data.theme === 'dark') ? styles.darkTheme : styles.lightTheme;
            const appClasses = ClassNames(styles.app, themeClass);
            return (
              <ThemeContext.Provider value={ currTheme.data.theme }>
                <div className={ appClasses }>
                  <Nav/>
                  <Switch>
                    <Route path='/' exact component={ HomePage }/>
                    <Route path='/search' component ={ Search }/>
                    <Route path='/settings' component = { Settings }/>

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
                      render={ () => {} }
                    />

                    <Route 
                      path='/componentdevplayground'
                      render={ () => (
                        <CenteringCradle>
                          <CircleBubblesLoader/>
                        </CenteringCradle>
                      )}
                    />

                    <Route render={ ({ location }) => <NotFoundPageComponent/> }/>
                  </Switch>
                  <Footer/>
                  <SideDrawer/>
                  {
                    (backdropOpen.data.backdropOpen) && <Backdrop/>
                  }
                </div>
              </ThemeContext.Provider> 
            );
          }
        }
      </Composed>
    );
  }
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
