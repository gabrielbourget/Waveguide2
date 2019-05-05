import { SIDE_DRAWER_OPEN_QUERY,
				 CURRENT_THEME_QUERY } from '../GraphQL/Queries';
import { CHANGE_THEME_MUTATION } from '../GraphQL/Mutations';

export const Mutation = {
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
	switchTheme(_, variables, { cache }) {
		const { newTheme } = variables.theme;
		let data;
		switch (newTheme) {
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
			default: break;
		}
		cache.writeData(data);
		return data;
	}	
};
