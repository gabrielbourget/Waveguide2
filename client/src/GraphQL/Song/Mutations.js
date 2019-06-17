import gql from 'graphql-tag';

/**
 * CREATE_SONG_MUTATION
 * Description: Add a new song into the persistence graph.
 */
// - TODO -> Add other input fields, probably just create input type.
export const CREATE_SONG_MUTATION = gql`
	mutation CREATE_SONG_MUTATION($name: String) {
		CreateSong(name: $name) {
			id
			name
		}
	}
`;

/**
 * UPDATE_SONG_MUTATION
 * Description: Edits the internal details of a Song
 */
// - TODO -> Add other input fields, probably just create input type.
export const UPDATE_SONG_MUTATION = gql`
	mutation UPDATE_SONG_MUTATION($name: String) {
		UpdateSong(name: $name) {
			id 
			name
		}
	}
`;


