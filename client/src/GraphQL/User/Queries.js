import gql from 'graphql-tag';

/**
 * CURRENT_USER_QUERY 
 * Description: Return info on currently signed in user.
 */
export const CURRENT_USER_QUERY = gql`
	query CURRENT_USER_QUERY {
		me {
			id 
			name 
			email
			imageURL
		}
	}
`;

/**
 * USER_DETAILS_QUERY
 * Description: Grab a thorough set of a user's profile information. 
 * 						  Used to populate the profile editing form.
 */
export const USER_DETAILS_QUERY = gql`
	query USER_DETAILS_QUERY ($id: ID!) {
		User(id: $id) {
			id
			username
			name
			firstName
			middleNames
			lastName 
			email 
			image 
			biography
			city
			artProjects {
				# id   #commented out some IDs for now cause they're not in the graph yet
				name
			}
			musicLabels {
				# id 
				name 
			}
			artCollectives {
				# id 
				name
			}
			socialMediaLinks {
				network 
				link 
			} 
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

/**
 * PASSWORD_MATCH_QUERY
 * Description: Validates whether a password the user has 
 * entered matches the one on record in the database.
 */
export const PASSWORD_MATCH_QUERY = gql`
	query PASSWORD_MATCH_QUERY($oldPassword: String!) {
		passwordMatch(oldPassword: $oldPassword) {
			message
		}
	}
`;



