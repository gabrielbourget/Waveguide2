import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ApolloConsumer } from 'react-apollo';
import debounce from 'lodash';
import { ThemeContext } from '../../ThemeContext';

import FromTheTopCradle from '../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';
import RecentSearches from './RecentSearches/RecentSearches';
import SearchResults from './SearchResults/SearchResults';

import styles from './Search.module.scss';
import { SEARCH_ARTPROJECTS_QUERY } from '../../GraphQL/Queries';
import { SEARCH_DEBOUNCE_TIME } from '../../clientConfig';


class Search extends React.Component {

	state = {
		searchQuery: ''
	};

	handleSearchSubmit = (e) => {
		if (this.state.searchQueryText === '') return;
		this.props.history.push('/artists');		
	};

	handleSearchFormSubmit = (e) => {
		e.preventDefault();
		if (this.state.searchQueryText === '') return;
		//this.props.searchThroughArtists(this.state.searchQueryText);	
		// - TODO -> Call grqphql query here instead.
		this.props.history.push('/artists');
	};	

	render() {

		const initObject = prepareComponent(this.context);

		return (
			<div className={ styles.search }>
				<div className={ initObject.searchBarClasses }>
					<form 
						className={ initObject.searchFormClasses }
						onSubmit={ (e) => this.props.handleSearchFormSubmit(e) }
					>
						<input 
						  className={ initObject.searchInputClasses }
							type='text'
							ref={ this.searchInputRef }
							id='searchInput' // - Temporary until ref issue fixed.
							value={ this.state.searchQueryText }
							onChange={ (e) => this.setState({ searchQueryText: e.target.value }) }
							placeholder='Search'
						/>
					</form>
				</div>
				{
					(this.state.searchQuery === '') ?
					<RecentSearches /> :
					<SearchResults />
				}
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
