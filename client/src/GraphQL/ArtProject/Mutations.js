import gql from 'graphql-tag';

/**
 * EDIT_ART_PROJECT_MUTATION 
 * Description: Edits the internal details of an ArtProject
 */
export const EDIT_ART_PROJECT_MUTATION = gql`
	mutation EDIT_ART_PROJECT_MUTATION($name: String!) {
		UpdateArtProject(name: $name) {
			id
			name
			biography
		}
	}
`;
