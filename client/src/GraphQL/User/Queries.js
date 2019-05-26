import gql from 'graphql-tag';

/**
 * CURRENT_USER_QUERY 
 * Description: Return info on currently signed in user.
 */
export const CURRENT_USER_QUERY = gql`
	query {
		me {
			id 
			name 
			email
			imageURL
		}
	}
`;

/**
 * USER_SETTINGS_QUERY
 * Description: Queries the topology for a user's settings.
 */
export const USER_SETTINGS_QUERY = gql`
	query USER_SETTINGS_QUERY ($id: ID!) {
		User(id: $id) {
			id
			settings
		}
	}
`;
