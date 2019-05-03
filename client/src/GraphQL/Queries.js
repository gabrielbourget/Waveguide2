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
