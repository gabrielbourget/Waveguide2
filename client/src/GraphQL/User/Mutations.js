import gql from 'graphql-tag';

/**
 * REGISTER_MUTATION
 * Description: Creates a new user in the system.
 */
export const REGISTER_MUTATION = gql`
	mutation REGISTER_MUTATION($username: String!, 
														 $email: String!, 
														 $password: String!,
														 $passwordConfirmation: String!) {
		CreateUser(username: $username, email: $email, password: $password) {
			id
			username 
			email 
			image
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
			image
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
		requestReset(email: $email) {
			message
		}
	}
`;

/**
 * RESET_PASSWORD_MUTATION
 * Description: Resets the user's password in the database.
 */
export const RESET_PASSWORD_MUTATION = gql`
	mutation RESET_PASSWORD_MUTATION($password: String!, $passwordConfirmation: String!) {
		resetPassword(password: $password, passwordConfimation: $passwordConfimation) {
			message
		}
	}
`;

/**
 * EDIT_USER_MUTATION
 * Description: Modifies user profile data.
 */
export const EDIT_USER_MUTATION = gql`
	mutation EDIT_USER_MUTATION($username: String,
															$name: String,
															$firstName: String,
															$lastName: String
															$email: String,
															$password: String,
															$passwordConfirmation: String,
															$image: String,
															$biography: String,
															$city: String) {
		UpdateUser(username: $username,
							 name: $name,
							 firstName: $firstName,
							 lastName: $lastName,
							 email: $email,
							 password: $password,
							 passwordConfimation: $passwordConfimation,
							 image: $image,
							 biography: $biogrpahy,
							 city: $city) {
			id 
			username 
			email 
			image
		}
	}
`;

/**
 * CHANGE_PASSWORD_MUTATION
 * Description: Fulfills a user's wish to change their password.
 */
export const CHANGE_PASSWORD_MUTATION = gql`
	mutation CHANGE_PASSWORD_MUTATION($newPassword: String!,
																		$newPasswordConfirmation: String!) {
		changePassword(newPassword: $newPassword,
									 newPasswordConfirmation: $newPasswordConfirmation) {
			message
		}
	}

`;






