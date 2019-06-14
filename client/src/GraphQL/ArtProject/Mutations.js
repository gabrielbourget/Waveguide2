import gql from 'graphql-tag';

/**
 * ADD_ART_PROJECT_MUTATION
 * Description: Creates and adds a new ArtProject into the 
 * persistence graph. 
 */
// - TODO -> Add other input fields, probably just create input type.
export const ADD_ART_PROJECT_MUTATION = gql`
	mutation AddArtProject($name: String!) {
		AddArtProject(name: $name) {
			id 
			name 
			biography
		}
	}
`;

/**
 * UPDATE_ART_PROJECT_MUTATION 
 * Description: Edits the internal details of an ArtProject
 */
// - TODO -> Add other input fields, probably just create input type.
export const UPDATE_ART_PROJECT_MUTATION = gql`
	mutation UPDATE_ART_PROJECT_MUTATION($name: String!) {
		UpdateArtProject(name: $name) {
			id
			name
			biography
		}
	}
`;
