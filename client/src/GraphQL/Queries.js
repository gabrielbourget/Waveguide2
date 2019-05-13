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
 * SETTINGS_PANEL_OPEN_QUERY 
 * Description: Checks to see if the application's 
 * settings panel is open.
 */
export const SETTINGS_PANEL_OPEN_QUERY = gql`
	query {
		settingsPanelOpen @client
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
`;

/**
 * SEARCH_ARTPROJECTS_QUERY
 * Description: Search database for art projects based 
 * on project name.
 */
export const SEARCH_ARTPROJECTS_QUERY = gql`
	query SEARCH_ARTPROJECTS_QUERY($searchTerm: String!) {
		ArtProject(filter: { name_contains: $searchTerm }) {
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












