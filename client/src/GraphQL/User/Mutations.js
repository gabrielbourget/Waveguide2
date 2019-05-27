import gql from 'graphql-tag';

/**
 * REGISTER_MUTATION
 * Description: Creates a new user in the system.
 */
export const REGISTER_MUTATION = gql`
	mutation REGISTER_MUTATION($username: String!, $email: String!, $password: String!) {
		CreateUser(username: $username, email: $email, password: $password) {
			id
			username 
			email 
			imageURL
		}
	}
`;

/**
 * LOGIN_MUTATION
 * Description: Attempts to sign a user in, and returns some of their info
 */
export const LOGIN_MUTATION = gql`
	mutation LOGIN_MUTATION($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id 
			username 
			email
			imageURL
		}
	}
`;

/**
 * REQUEST_RESET_MUTATION
 * Description: Sends off request from client to the server in order to 
 * generate a reset token for their password and send off an email to them.
 */
export const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		message
	}
`;

