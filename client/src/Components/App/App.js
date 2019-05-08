import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';
import { Query } from 'react-apollo';

import { CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import SoundcloudEmbed from '../Embeds/SoundcloudEmbed/SoundcloudEmbed';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';
import HomePage from '../../Ecosystems/HomePage/HomePage';
import ArtProjectDisplay from '../../Ecosystems/ArtProjectDisplay/ArtProjectDisplay';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent';

import styles from './App.module.css';

class App extends React.Component {

  componentDidMount() {
    // const clientDateTime = new Date();
    // const hour = clientDateTime.getHours();
    // ( hour > 7 && hour < 21 ) ? this.props.switchTheme('light') : this.props.switchTheme('dark');
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
