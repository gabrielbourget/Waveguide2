import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ThemeContext } from '../../ThemeContext';

import FromTheTopCradle from '../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';
import SearchBar from './SearchBar/SearchBar';
import RecentSearches from './RecentSearches/RecentSearches';
import SearchResults from './SearchResults/SearchResults';

import styles from './Search.module.scss';

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
				<SearchBar 
					defaultText='Search'
					handleSearchSubmit={ this.handleSearchSubmit }
					handleSearchFormSubmit={ this.handleSearchFormSubmit }
				/>
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
	const searchResultsClasses = ClassNames(styles.searchResults, themeClass);

	return { searchResultsClasses };
}

Search.contextType = ThemeContext;
const SearchWithRouter = withRouter(Search);
export default SearchWithRouter;
