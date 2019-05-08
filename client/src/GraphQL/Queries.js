import gql from 'graphql-tag';


/**
 * SIDE_DRAWER_OPEN_QUERY
 * Description: Checks to see if the application's 
 * side drawer is open or not. 
 */
export const SIDE_DRAWER_OPEN_QUERY = gql`
	query {
		sideDrawerOpen @client
	}
`;

/**
 * CURRENT_THEME_QUERY
 * Description: Checks to see which color theme is 
 * currently set for the application.
 */
export const CURRENT_THEME_QUERY = gql`
	query {
		theme @client
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
`

/**
 * SEARCH_ARTPROJECTS_QUERY
 * Description: Search database for art projects based 
 * on project name.
 */
export const SEARCH_ARTPROJECTS_QUERY = gql`
	query SEARCH_ARTPROJECTS_QUERY($searchTerm: String!) {
		ArtProject(where: { title_contains: $searchTerm }) {
			id
			imageURL
			name 
			socialMediaLinks {
				id 
				network 
				link 
			}
		}
	}
`;
