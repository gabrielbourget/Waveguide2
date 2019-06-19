import gql from 'graphql-tag'; 

/**
 * SONG_GROUP_DETAILS_QUERY
 * Description: Grab a thorough set of a user's profile information. 
 * 						  Used to populate the profile editing form.
 */
export const SONG_GROUP_DETAILS_QUERY = gql`
	query SONG_GROUP_DETAILS_QUERY ($id: ID!) {
		SongGroup(id: $id) {
			id
			title
			tempo
			releaseDate
			duration
			contributors
		}
	}
`;
