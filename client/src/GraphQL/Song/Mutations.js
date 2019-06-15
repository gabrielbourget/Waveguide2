import gql from 'graphql-tag';

/**
 * ADD_SONG_MUTATION
 * Description: Add a new song into the persistence graph.
 */
// - TODO -> Add other input fields, probably just create input type.
export const ADD_SONG_MUTATION = gql`
	mutation AddSong($name: String) {
		id
		name
	}
`;

/**
 * UPDATE_SONG_MUTATION
 * Description: Edits the internal details of a Song
 */
// - TODO -> Add other input fields, probably just create input type.
export const UPDATE_SONG_MUTATION = gql`
	mutation UpdateSong($name: String) {
		id 
		name
	}
`;


