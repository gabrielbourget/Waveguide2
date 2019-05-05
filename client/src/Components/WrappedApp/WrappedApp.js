import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import dotenv from 'dotenv';

import { ThemeContext } from '../../ThemeContext';
import { Mutation } from '../'

import App from '../App/App';

dotenv.config({ path: '../../../../.env'});

const apolloClient = new ApolloClient({
	// - This will have a different endpoint to pop over to once Waveguide is in prod. 
	uri: process.env.NODE_ENV === 'development' ? process.env.GRAPHQL_ENDPOINT : process.env.GRAPHQL_ENDPOINT,
	request: operation => {
		operation.setContext({
			fetchOptions: {
				credentials: 'include'
			},
			//headers
		});
	},
	// - LOCAL STATE
	clientState: {
		resolvers: { Mutation }, 
		defaults: {
			sideDrawerOpen: false,
			theme: 'dark'
		}
	}
});

const WrappedApp = () => (
	<ApolloProvider client={ apolloClient }>
		<Router>
			<App/>
		</Router>
	</ApolloProvider>
);

export default WrappedApp;


