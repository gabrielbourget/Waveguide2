import gql from 'graphql-tag';

/**
 * USER_SETTINGS_QUERY
 * Description: Queries the topology for a user's settings.
 */
export const = USER_SETTINGS_QUERY = gql`
	query USER_SETTINGS_QUERY ($id: ID!) {
		User(id: $id) {
			id
			settings
		}
	}
`;
