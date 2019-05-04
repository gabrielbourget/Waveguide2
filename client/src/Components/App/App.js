import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { Query } from 'react-apollo';

import { CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import logo from './logo.svg';
import './App.css';

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
              
            </ThemeContext.Provider>
          )
        }
      </Query>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
