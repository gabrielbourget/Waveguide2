import React from 'react';
//import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { Query } from 'react-apollo';

import { CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
// import SoundcloudEmbed from '../Embeds/SoundcloudEmbed/SoundcloudEmbed';
import ConversationWindow from '../ChatClient/ConversationWindow/ConversationWindow';

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
          ({ data }) => (
            <ThemeContext.Provider value={ data.theme }>
              <div className={ styles.app }>
                <CenteringCradle>
                  <ConversationWindow />
                </CenteringCradle>
              </div>
            </ThemeContext.Provider>
          )
        }
      </Query>
    );
  }
}

export default App;
