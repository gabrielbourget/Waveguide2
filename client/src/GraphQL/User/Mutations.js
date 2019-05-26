import gql from 'graphql-tag';

/**
 * LOGIN_MUTATION
 * Description: Attempts to sign a user in, and returns some of their info
 */
export const LOGIN_MUTATION = gql`
	mutation LOGIN_MUTATION($email: String!, $password: String!) {
		signIn(email: $email, password: $password) {
			id 
			name 
			email
			imageURL
		}
	}
`;
