import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';
import { Query } from 'react-apollo';

import { CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import NotFoundPageComponent from '../../Components/NotFoundPageComponent/NotFoundPageComponent';
import HomePage from '../HomePage/HomePage';
import Search from '../Search/Search';
import ArtProjectDisplay from '../ArtProjectDisplay/ArtProjectDisplay';
import Settings from '../Settings/Settings';

import styles from './App.module.css';

class App extends React.Component {

  componentDidMount() {
    // const clientDateTime = new Date();
    // const hour = clientDateTime.getHours();
    // ( hour > 7 && hour < 21 ) ? this.props.switchTheme('light') : this.props.switchTheme('dark');
  }

  state = {

  }

  render() {
    return (
      <Query query={ CURRENT_THEME_QUERY }>
        {
          ({ data }) => {
            // data.theme = 'light'
            const themeClass = (data.theme === 'dark') ? styles.darkTheme : styles.lightTheme;
            const appClasses = ClassNames(styles.app, themeClass);

            return (
              <ThemeContext.Provider value={ data.theme }>
                <div className={ appClasses }>
                  <Nav/>
                  <Switch>
                    <Route path='/' exact component={ HomePage }/>
                    <Route 
                      path='/artists'
                      render={ () => (
                        <ArtProjectDisplay displayMode='gallery'/>                
                      )}
                    />
                    <Route path='/search' component ={ Search }/>
                    <Route path='/settings' component = { Settings }/>
                    <Route render={ ({ location }) => <NotFoundPageComponent/> }/>
                  </Switch>
                  <Footer/>
                  <SideDrawer/>
                </div>
              </ThemeContext.Provider> 
            );
          }
        }
      </Query>
    );
  }
}

export default App;
