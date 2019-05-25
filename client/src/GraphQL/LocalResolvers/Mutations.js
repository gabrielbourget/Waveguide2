import { SIDE_DRAWER_OPEN_QUERY } from '../Queries';
import { SETTINGS_PANEL_OPEN_QUERY } from '../Queries';
import { BACKDROP_OPEN_QUERY } from '../Queries';

export const Mutation = {
	// ---------------------- //
	// - TOGGLE SIDE DRAWER - //
	// ---------------------- //
	toggleSideDrawer(_, variables, { cache }) {
		// - Read sideDrawerOpen value from the cache
		const { sideDrawerOpen } = cache.readQuery({
			query: SIDE_DRAWER_OPEN_QUERY
		});
		// - Flip the side drawer state to its opposite.
		const data = {
			data: { sideDrawerOpen: !sideDrawerOpen }
		};
		// - Write this data to the cache
		cache.writeData(data);
		return data;
	},
	// ------------------------- // 
	// - TOGGLE SETTINGS PANEL - //
	// ------------------------- //
	toggleSettingsPanel(_, variables, { cache }) {
		const { settingsPanelOpen } = cache.readQuery({
			query: SETTINGS_PANEL_OPEN_QUERY
		});
		const data = {
			data: { settingsPanelOpen: !settingsPanelOpen }
		};
		cache.writeData(data);
		return data;
	},
	//---------------------//
	// - TOGGLE BACKDROP - //
	//---------------------//
	toggleBackdrop(_, variables, { cache }) {
		const { backdropOpen } = cache.readQuery({
			query: BACKDROP_OPEN_QUERY
		});
		// console.log(backDropOpen);
		const data = {
			data: { backdropOpen: !backdropOpen }
		};
		cache.writeData(data);
		return data;
	},
	// ---------------- //
	// - SWITCH THEME - //
	// ---------------- //
	switchTheme(_, variables, { cache }) {
		let data;
		switch (variables.theme) {
			case 'dark': {
				data = {
					data: { theme: 'dark' }
				};
				break;
			}
			case 'light': {
				data = {
					data: { theme: 'light' }
				};
				break;
			}
			default: {
				console.log('in default case');
				break;
			}
		}
		cache.writeData(data);
		return data;
	}
};







