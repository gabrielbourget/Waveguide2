import React from 'react';
//import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ApolloConsumer } from 'react-apollo';
//import debounce from 'lodash';

import { SEARCH_ARTPROJECTS_QUERY } from '../../GraphQL/ArtProject/Queries';
import { ALL_ARTPROJECTS_QUERY } from '../../GraphQL/ArtProject/Queries';

import ArtProjectDisplay from '../ArtProject/ArtProjectDisplay/ArtProjectDisplay';
import CenteringCradle from '../../Components/Cradles/CenteringCradle/CenteringCradle';
import LaggingLinesLoader from '../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { ThemeContext } from '../../ThemeContext';

import RecentSearches from './RecentSearches/RecentSearches';
// import SearchResults from './SearchResults/SearchResults';

import styles from './Search.module.scss';

// import { capitalize } from '../../Helpers/stringProcessing';
// import { SEARCH_DEBOUNCE_TIME } from '../../clientConfig';


class Search extends React.Component {

	state = {
		searchQuery: '',
		loading: false,
		artProjects: []
	};	

	// - Want to debounce onChange function, but runtime error claims
	//   it's not a function when it's wrapped in the debounce. 

	onChange = async (e, client) => {

		const searchQuery = e.target.value;

		this.setState({ searchQuery });

		// - Don't hit the database for an empty query string.
		if (searchQuery === '') return;

		// - Abstract this to helper function when I can figure out import problem.
		const firstLetterUp = searchQuery.charAt(0).toUpperCase();
		const restDown = searchQuery.slice(1).toLowerCase();

		const searchQueryCapitalized = firstLetterUp + restDown;
		const searchQueryCaps = searchQuery.toUpperCase();

		this.setState({ loading: true });

		let res;

		// - If search Query is 'Everyone', return all art projects.
		//   Otherwise, do a lookup based on the search query.
		if (searchQuery.toLowerCase() === 'everyone') {
			res = await client.query({
				query: ALL_ARTPROJECTS_QUERY
			});
		}
		else {
			res = await client.query({
				query: SEARCH_ARTPROJECTS_QUERY,
				variables: { 
					searchQuery,
					searchQueryCapitalized,
					searchQueryCaps
				}
			});
		}

		// - Payload received. 
		this.setState({
			loading: false,
			artProjects: res.data.ArtProject
		});

	};

	renderLogic = () => {
		// - TODO -> Build shadow component of this or use loading spinner of some sort. 
		if (this.state.loading) {
			return (
				<CenteringCradle>
					<LaggingLinesLoader/>
				</CenteringCradle>
			);
		}
		if (this.state.searchQuery === '') return <RecentSearches/>

		return (
			<ArtProjectDisplay 
				artProjects={ this.state.artProjects }
				displayMode='gallery'
			/>
		);
	};

	render() {

		const initObject = prepareComponent(this.context);

		return (
			<div className={ styles.search }>
				<div className={ initObject.searchBarClasses }>
					<SearchBar 
						onChange={ this.onChange }
						searchQuery={ this.state.searchQuery }
					/>
				</div>
				{ this.renderLogic() }
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const searchBarClasses = ClassNames(styles.searchBar, themeClass);
	const searchFormClasses = ClassNames(styles.searchForm, themeClass)
	const searchInputClasses = ClassNames(styles.searchInput, themeClass);
	const searchResultsClasses = ClassNames(styles.searchResults, themeClass);

	return { 
		searchBarClasses,
		searchFormClasses,
		searchInputClasses,
		searchResultsClasses
	};
}

Search.contextType = ThemeContext;
const SearchWithRouter = withRouter(Search);
export default SearchWithRouter;
