import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { ThemeContext } from '../../../ThemeContext';

import IconButton from '../../../Components/Buttons/IconButton/IconButton';
import OutlineButton from '../../../Components/Buttons/OutlineButton/OutlineButton';

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
				<React.Fragment>
					<form 
						className={ styles.searchField }
						onSubmit={ (e) => this.props.handleSearchFormSubmit(e) }
					>
						<input 
							type='text'
							ref={ this.searchInputRef }
							id='searchInput' // - Temporary until ref issue fixed.
							value={ this.state.searchQueryText }
							onChange={ (e) => this.setState({ searchQueryText: e.target.value }) }
							className={ initObject.searchInputClasses }
							placeholder={ this.props.defaultText }
						/>
					</form>
					<OutlineButton
						text='Search'
						onClick={ (e) => this.props.handleSearchSubmit(e) }
						shape='rounded'
					/>
				</React.Fragment> 			
			</div>
		);
	}
}

const prepareComponent = (context, state) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const activeClass = (state.active) ? styles.active : null;

	const searchBarClasses = ClassNames(styles.searchBar, themeClass, activeClass);
	const searchInputClasses = ClassNames(styles.searchInput, themeClass);

	return {
		searchBarClasses,
		searchInputClasses
	};
};


SearchBar.contextType = ThemeContext;
const SearchBarWithRouter = withRouter(SearchBar);
export default SearchBarWithRouter;
