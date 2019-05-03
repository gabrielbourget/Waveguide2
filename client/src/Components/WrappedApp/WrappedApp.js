import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';

import { GRAPHQL_ENDPOINT } from '../../clientConfig';
import { SIDE_DRAWER_OPEN_QUERY,
				 CURRENT_THEME_QUERY } from '../../GraphQL/Queries';
import { CHANGE_THEME_MUTATION } from '../../GraphQL/Mutations';
import { ThemeContext } from '../../ThemeContext';

import App from '../App/App';

const apolloClient = new ApolloClient({
	// - This will have a different endpoint to pop over to once Waveguide is in prod. 
	uri: process.env.NODE_ENV === 'development' ? GRAPHQL_ENDPOINT : GRAPHQL_ENDPOINT,
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
		resolvers: {
			Mutation: {
				toggleSideDrawer(_, variables, { cache }) {
					// - Read sideDrawerOpen value from the cache
					const { sideDrawerOpen } = cache.readQuery({
						query: SIDE_DRAWER_OPEN_QUERY
					});
					// - Flip the side drawer state to its opposite.
					const data = {
						data: { sideDrawerOpen: !sideDrawerOpen }
					};
					// - Write this data to the cache
					cache.writeData(data);
					return data;
				},
				switchTheme(_, variables, { cache }) {
					const { newTheme } = variables.theme;
					let data;
					switch (newTheme) {
						case 'dark': {
							data = {
								data: { theme: 'dark' }
							};
							break;
						}
						case 'light': {
							data = {
								data: { theme: 'light' }
							};
							break;
						}
						default: break;
					}
					cache.writeData(data);
					return data;
				}
			}
		}, 
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


