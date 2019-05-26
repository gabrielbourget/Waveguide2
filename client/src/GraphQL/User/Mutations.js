import gql from 'graphql-tag';

/**
 * SIGNIN_MUTATION
 * Description: Attempts to sign a user in, and returns some of their info
 */
export const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signIn(email: $email, password: $password) {
			id 
			name 
			email
			imageURL
		}
	}
`;
