import gql from 'graphql-tag';

/**
 * SWITCH_THEME_MUTATION
 * Description: Takes in a theme string and 
 * changes the current theme string in the 
 * local data cache. 
 */
export const SWITCH_THEME_MUTATION = gql`
	mutation SWITCH_THEME_MUTATION($theme: String!) {
		switchTheme(theme: $theme) @client
	}
`;

/**
 * TOGGLE_SIDE_DRAWER_MUTATION 
 * Description: Toggles the side drawer as open or closed
 * triggering it to render in and out of the application. 
 */
export const TOGGLE_SIDE_DRAWER_MUTATION = gql`
	mutation {
		toggleSideDrawer @client
	}
`;

/**
 * TOGGLE SETTINGS PANEL MUTATION
 * Description: Toggles the settings panel as open or closed,
 * triggering it to render in and out of the application.
 */
export const TOGGLE_SETTINGS_PANEL_MUTATION = gql`
	mutation {
		toggleSettingsPanel @client
	}
`;
