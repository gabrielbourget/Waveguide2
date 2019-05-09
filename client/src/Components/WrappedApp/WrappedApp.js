import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import dotenv from 'dotenv';

import { Mutation } from '../../GraphQL/LocalResolvers/Mutations';

import App from '../App/App';

//dotenv.config({ path: '../../../.env'});

const result = dotenv.config({ path: '../../../.env'});
 
// if (result.error) {
//   throw result.error;
// }

const { GRAPHQL_ENDPOINT } = process.env;
console.log(`GraphQL Endpoint: -> ${process.env.GRAPHQL_ENDPOINT}`);

const apolloClient = new ApolloClient({
	// - This will have a different endpoint to pop over to once Waveguide is in prod. 
	//uri: process.env.NODE_ENV === 'development' ? process.env.GRAPHQL_ENDPOINT : process.env.GRAPHQL_ENDPOINT,
	uri: 'http://localhost:4444/graphql',
	// request: operation => {
	// 	operation.setContext({
	// 		fetchOptions: {
	// 			credentials: 'include'
	// 		},
	// 		//headers
	// 	});
	// },
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


