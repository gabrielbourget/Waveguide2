import gql from 'graphql-tag';

/**
 * CREATE_SONG_GROUP_MUTATION
 * Description: Add a new SongGroup into the persistence graph.
 */
// - TODO -> Add other input fields, probably just create input type.
export const CREATE_SONG_GROUP_MUTATION = gql`
	mutation CREATE_SONG_GROUP_MUTATION ($title: String) {
		CreateSongGroup(title: $title) {
			id 
			title
		}
	}
`;

/**
 * UPDATE_SONG_GROUP_MUTATION
 * Description: Updates the internal details of a SongGroup
 */
// - TODO -> Add other input fields, probably just create input type.
export const UPDATE_SONG_GROUP_MUTATION = gql`
	mutation UPDATE_SONG_GROUP_MUTATION ($title: String) {
		UpdateSongGroup(title: $title) {
			id 
			title
		}
	}
`;
