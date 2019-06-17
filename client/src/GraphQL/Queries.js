import gql from 'graphql-tag';


/**
 * SIDE_DRAWER_OPEN_QUERY
 * Description: Checks to see if the application's 
 * side drawer is open or not. 
 */
export const SIDE_DRAWER_OPEN_QUERY = gql`
	query SIDE_DRAWER_OPEN_QUERY {
		sideDrawerOpen @client
	}
`;

/**
 * SETTINGS_PANEL_OPEN_QUERY 
 * Description: Checks to see if the application's 
 * settings panel is open.
 */
export const SETTINGS_PANEL_OPEN_QUERY = gql`
	query SETTINGS_PANEL_OPEN_QUERY {
		settingsPanelOpen @client
	}
`;

/**
 * BACKDROP_OPEN_QUERY
 * Description: Checks to see if backdrop is applied or not.
 */
export const BACKDROP_OPEN_QUERY = gql`
	query BACKDROP_OPEN_QUERY {
		backdropOpen @client
	}
`;

/**
 * CURRENT_THEME_QUERY
 * Description: Checks to see which color theme is 
 * currently set for the application.
 */
export const CURRENT_THEME_QUERY = gql`
	query CURRENT_THEME_QUERY {
		theme @client
	}
`;
