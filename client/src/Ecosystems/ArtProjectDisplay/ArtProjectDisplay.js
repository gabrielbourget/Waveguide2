import React from 'react';
import { Query } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import TopBar from './TopBar/TopBar';
import ArtistGallery from '../../Components/Galleries/ArtistGallery/ArtistGallery';
import ArtistTable from '../../Components/Tables/ArtistTable/ArtistTable';
import FromTheTopCradle from '../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';

import styles from './ArtProjectDisplay.module.scss';
import { sortArtists } from './helpers';
import { ALL_ARTPROJECTS_QUERY } from '../../GraphQL/Queries';

class ArtProjectDisplay extends React.Component {
	state = {
		displayMode: 'gallery',
		displayedArtProjects: []
	};

	switchViewMode = (displayMode) => {
		this.setState({ displayMode });
	};

	resolveDisplayMode = (initObject) => {
		if (this.state.displayedArtProjects.length === 0) {
			return (
        <div className={ initObject.noResultsClasses }>
          <h4>Search for an artist up top in the navigation bar.</h4>
          <br/>
          <h4>
            Enter 'everyone' as the search term to return all <br/>
            artists contained in the community directory.
          </h4>
        </div>
			);
		}
		if (this.state.displayMode === 'gallery') {
			return (
				<ArtistGallery artists={ this.state.displayedArtProjects }/>
			);
		}
		else if (this.state.displayMode === 'table') {
			return (
				<ArtistTable artists={ this.state.displayedArtProjects }/>
			);
		}
	};

	render() {
		return (
			<Query query={ ALL_ARTPROJECTS_QUERY }>
				{
					({ data, loading, error }) => {
						console.log(data);
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error!...</p>;

						// - Move artprojects from graphql result into local state.
						this.setState({ displayedArtProjects: data.ArtProject })
						
						const initObject = prepareComponent(this.context, this.props, this.state);

						return (
							<FromTheTopCradle>
								<div className={ initObject.artistProfileDisplayClasses }>
									<TopBar 
										onSortClick={ sortArtists }
										onSortClick={ sortArtists }	
										onSwitchViewModeClick={ this.switchViewMode }
									/>
									{ this.resolveDisplayMode(initObject) }
								</div>				
							</FromTheTopCradle>
						);
					}
				}
			</Query>
		);
	}
}

const prepareComponent = (context, props, state) => {

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






