import { sortCriteriaEnum } from '../Helpers/generalDataStructures';

// - Return copy of input array that only includes matches to search query.
export const searchThroughArtists = (queryToMatch, artists) => {

	// - Shortcut in order to display all artists.
	if (queryToMatch === 'everyone' || 
		  queryToMatch === 'Everyone' || 
		  queryToMatch === 'EVERYONE') return artists;

	if (queryToMatch === 'coldkiss' || queryToMatch === 'Coldkiss') {
		return artists.filter((artist) => {
			return artist.name.match('c o l d k i s s');
		});
	}

	return artists.filter((artist) => {
		const regex = new RegExp(queryToMatch, 'gi');
		return artist.name.match(regex);
	})
};

// - Return given array of artists sorted either alphabetically or reverse alphabetically.
export const sortArtists = (direction, artistsCopy) => {

	let sortedArtists;

	switch (direction) {
		case sortCriteriaEnum.ALPHABETICAL: {
			sortedArtists = artistsCopy.sort((a,b) => a.name > b.name ? 1 : -1);
			break;
		}
		case sortCriteriaEnum.REVERSE_ALPHABETICAL: {
			sortedArtists = artistsCopy.sort((a,b) => a.name > b.name ? -1 : 1);
			break;
		}
		default: return artistsCopy;
	}

	return sortedArtists;
}
