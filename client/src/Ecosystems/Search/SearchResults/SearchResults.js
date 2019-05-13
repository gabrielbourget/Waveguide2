import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './SearchResults.module.scss';

class SearchResults extends React.Component {
	render() {
		return (
			<h1>Recent Searches</h1>
		);
	}
}



SearchResults.contextType = ThemeContext;
export default SearchResults;
