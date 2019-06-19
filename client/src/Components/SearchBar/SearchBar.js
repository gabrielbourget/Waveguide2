import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ApolloConsumer } from 'react-apollo';

import { SEARCH_ARTPROJECTS_QUERY } from '../../GraphQL/Queries';
import { SEARCH_DEBOUNCE_TIME } from '../../clientConfig';

import IconButton from '../Buttons/IconButton/IconButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import { ThemeContext } from '../../ThemeContext';

import styles from './SearchBar.module.scss';

class SearchBar extends React.Component {
	state = {
		//active: false,
		searchQueryText: ''
	};

	static propTypes = {
		defaultText: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	static defaultProps = {
		defaultText: "Search 'everyone' to return all artists."
	};

	searchInputRef = React.createRef();

	// - Temporary until ref issue is fixed.
	// searchInput = document.getElementById('searchInput');
	
	handleSearchButtonClick = () => {
		const prevState = this.state;
		this.setState((prevState) => (
			{ active: !prevState.active }
		));

		// - Unsolved problem. Ref coming back as undefined, can't use it.
		//   React syntax seems to be ok, not sure what the issue is. 
		// console.log(this.searchInputRef);
		// this.searchInputRef.current.focus();
		
		// - Temporary until ref issue is fixed.
		// this.searchInput.focus();
		//document.getElementById('searchInput').focus();		
	};

	render() {
		const initObject = prepareComponent(this.context, this.state);

		return (
			<div className={ initObject.searchBarClasses }>
				<ApolloConsumer>
					{
						(client) => (
							<input 
							  className={ initObject.searchInputClasses }
								type='text'
								ref={ this.searchInputRef }
								id='searchInput' // - Temporary until ref issue fixed.
								value={ this.props.searchQuery }
								onChange={ (e) => {
									e.persist();
									this.props.onChange(e, client);
								}}
								placeholder='Search.'
							/>
						)
					}
				</ApolloConsumer>
			</div>
		);
	}
}

const prepareComponent = (context, state) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const searchBarClasses = ClassNames(styles.searchBar, themeClass);
	const searchInputClasses = ClassNames(styles.searchInput, themeClass);

	return {
		searchBarClasses,
		searchInputClasses
	};
};


SearchBar.contextType = ThemeContext;
const SearchBarWithRouter = withRouter(SearchBar);
export default SearchBarWithRouter;
