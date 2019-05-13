import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { Mutation } from '../../GraphQL/LocalResolvers/Mutations';

import App from '../App/App';

import { GRAPHQL_ENDPOINT } from '../../clientConfig';

const apolloClient = new ApolloClient({
	// - This will have a different endpoint to pop over to once Waveguide is in prod. 
	uri: process.env.NODE_ENV === 'development' ? GRAPHQL_ENDPOINT : GRAPHQL_ENDPOINT,
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
			settingsPanelOpen: false,
			theme: 'dark',
			storedArtProjects: [],
			storedEvents: [],
			storedUsers: []
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


