import gql from 'graphql-tag';

/**
 * STORED_ART_PROJECTS_QUERY
 * Description: Reads the local store to see what art projects have been returned 
 * from a query in the Search component. 
 */
export const STORED_ART_PROJECTS_QUERY = gql`
	query STORED_ART_PROJECTS_QUERY {
		storedArtProjects @client {
			id 
			imageURL 
			name 
			socialMediaLinks {
				network 
				link 
			}
		}
	}
`;

/**
 * ALL_ARTPROJECTS_QUERY
 * Description: Return all artprojects stored in the graph topology.
 */
export const ALL_ARTPROJECTS_QUERY = gql`
	query ALL_ARTPROJECTS_QUERY {
		ArtProject {
			id 
			imageURL 
			name 
			socialMediaLinks {
				network 
				link 
			}
		}
	}
`;

/**
 * SEARCH_ARTPROJECTS_QUERY
 * Description: Search database for art projects based 
 * on project name.
 */
export const SEARCH_ARTPROJECTS_QUERY = gql`
	query SEARCH_ARTPROJECTS_QUERY($searchQuery: String!, 
																 $searchQueryCapitalized: String!,
																 $searchQueryCaps: String!) {
		ArtProject(filter: {
			OR :[
				{ name_contains: $searchQuery },
				{ name_contains: $searchQueryCapitalized },
				{ name_contains: $searchQueryCaps }
			]
		}) {
			id
			imageURL
			name 
			socialMediaLinks {
				network 
				link 
			}
		}
	}
`;

/**
 * ARTPROJECT_BY_ID_QUERY
 * Description: Grab an art project from the graph based 
 * on its id. 
 */
export const ARTPROJECT_BY_ID_QUERY = gql`
	query ARTPROJECT_BY_ID_QUERY($artProjectId: ID!) {
		ArtProject(id: $artProjectId) {
			id 
			imageURL
			name
			biography
			socialMediaLinks {
				network 
				link
			}
		}
	}
`;

/**
 * ART_PROJECT_DETAILS_QUERY
 * Description: Grab a thorough set of a user's profile information. 
 * 						  Used to populate the profile editing form.
 */
export const ART_PROJECT_DETAILS_QUERY = gql`
	query ART_PROJECT_DETAILS_QUERY ($id: ID!) {
		ArtProject(id: $id) {
			id
			name
			biography
			socialMediaLinks {
				network 
				link 
			} 
		}
	}
`;



/**
 * 								---- TODO ----
 * RECENT_SEARCHES_QUERY
 * Description: Returns a list of recent search queries made 
 * by the person using the application.
 */
// export const RECENT_SEARCHES_QUERY = gql`
// 	query RECENT_SEARCHES_QUERY {
		
// 	}
// `;












