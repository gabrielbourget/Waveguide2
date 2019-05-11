import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import FromTheTopCradle from '../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';
import SearchBar from './SearchBar/SearchBar';

import styles from './Search.module.scss';

class Search extends React.Component {
	render() {

		const initObject = prepareComponent(this.context);

		return (
			<FromTheTopCradle>
				<SearchBar defaultText='Search'/>
			</FromTheTopCradle>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const searchResultsClasses = ClassNames(styles.searchResults, themeClass);

	return { searchResultsClasses };
}

Search.contextType = ThemeContext;
export default Search;
