import React from 'react';
import ClassNames from 'classnames';
import { Query } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import TopBar from './TopBar/TopBar';
import ArtistGallery from '../../Components/Galleries/ArtistGallery/ArtistGallery';
import ArtistTable from '../../Components/Tables/ArtistTable/ArtistTable';
import FromTheTopCradle from '../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';

import styles from './ArtProjectDisplay.module.scss';
import { sortArtists } from './helpers';

class ArtProjectDisplay extends React.Component {
	state = {
		displayMode: this.props.displayMode,
		displayedArtProjects: []
	};

	switchViewMode = (displayMode) => {
		this.setState({ displayMode });
	};

	resolveDisplayMode = (initObject) => {
		if (this.props.artProjects.length === 0) {
			return (
        <div className={ initObject.noResultsClasses }>
          <h4>Search for an artist up top in the navigation bar.</h4>
          <br/>
          <h4>
            Enter 'everyone' as the search term to return all <br/>
            art projects contained in the community directory.
          </h4>
        </div>
			);
		}
		if (this.state.displayMode === 'gallery') {
			return (
				<ArtistGallery artProjects={ this.props.artProjects }/>
			);
		}
		else if (this.state.displayMode === 'table') {
			return (
				<ArtistTable artProjects={ this.props.artProjects }/>
			);
		}
	};

	render() {
		const initObject = prepareComponent(this.context, this.props);

		return (
			<FromTheTopCradle>
				<div className={ initObject.artistProfileDisplayClasses }>
					<TopBar 
						onSortClick={ sortArtists }
						onSwitchViewModeClick={ this.switchViewMode }
					/>
					{ this.resolveDisplayMode(initObject) }
				</div>				
			</FromTheTopCradle>
		);
	}
}

const prepareComponent = (context, props) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const artistProfileDisplayClasses = ClassNames(styles.artistProfileDisplay, themeClass);
	const noResultsClasses = ClassNames(styles.noResults, themeClass);

	return {
		artistProfileDisplayClasses,
		noResultsClasses
	};
};

ArtProjectDisplay.contextType = ThemeContext;
export default ArtProjectDisplay;






