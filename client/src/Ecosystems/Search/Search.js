import React from 'react';
//import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ApolloConsumer } from 'react-apollo';
//import debounce from 'lodash';
import { ThemeContext } from '../../ThemeContext';

import RecentSearches from './RecentSearches/RecentSearches';
// import SearchResults from './SearchResults/SearchResults';
import ArtProjectDisplay from '../ArtProjectDisplay/ArtProjectDisplay';

import styles from './Search.module.scss';
import { SEARCH_ARTPROJECTS_QUERY } from '../../GraphQL/Queries';
import { ALL_ARTPROJECTS_QUERY } from '../../GraphQL/Queries';
// import { capitalize } from '../../Helpers/stringProcessing';
// import { SEARCH_DEBOUNCE_TIME } from '../../clientConfig';


class Search extends React.Component {

	state = {
		searchQuery: '',
		loading: false,
		artProjects: []
	};	

	onChange = async (e, client) => {

		const searchQuery = e.target.value;

		this.setState({ 
			searchQuery
		});

		// - Don't hit the database for an empty query string.
		if (searchQuery === '') return;

		const firstLetterUp = searchQuery.charAt(0).toUpperCase();
		const restDown = searchQuery.slice(1).toLowerCase();

		const searchQueryCapitalized = firstLetterUp + restDown;
		// const searchQueryCapitalized = searchQuery.capitalize();
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

		this.setState({
			loading: false,
			artProjects: res.data.ArtProject
		});

		console.log('Projects');
		console.table(res.data.ArtProject);
	};

	renderLogic = () => {
		if (this.state.loading) return <p>Loading...</p>;
		if (this.state.searchQuery === '') return <RecentSearches/>;
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
					{/*<form 
						className={ initObject.searchFormClasses }
						onSubmit={ (e) => { 
							e.stopPropagation();
							console.log('boop');
							return;
						}}
					>*/}
						<ApolloConsumer>
							{
								(client) => (
									<input 
									  className={ initObject.searchInputClasses }
										type='text'
										ref={ this.searchInputRef }
										id='searchInput' // - Temporary until ref issue fixed.
										value={ this.state.searchQuery }
										onChange={ (e) => {
											e.persist();
											this.onChange(e, client);
										}}
										placeholder='Search.'
									/>
								)
							}
						</ApolloConsumer>
					{/*</form>*/}
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
