import gql from 'graphql-tag'; 

/**
 * SONG_DETAILS_QUERY
 * Description: Grab a thorough set of a user's profile information. 
 * 						  Used to populate the profile editing form.
 */
export const SONG_DETAILS_QUERY = gql`
	query SONG_DETAILS_QUERY ($id: ID!) {
		Song(id: $id) {
			id
			title
			tempo
			keySignature
			songGroup
			releaseDate
			duration
		}
	}
`;
