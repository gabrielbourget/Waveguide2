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

// - Internal Components
import Routing from '../Routing/Routing';

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

    // const matchedPath = this.props.match;

    return (
      <Composed>
        {
          ({ currTheme, backdropOpen }) => {
            const themeClass = (currTheme.data.theme === 'dark') ? styles.darkTheme : styles.lightTheme;
            const appClasses = ClassNames(styles.app, themeClass);
            
            return (
              <ThemeContext.Provider value={ currTheme.data.theme }>
                <div className={ appClasses }>
                  <Nav/>
                  <Switch>

                    {/* Functional component that abstracts routing
                        around the different parts of the appliction. */}
                    <Routing />                  

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
