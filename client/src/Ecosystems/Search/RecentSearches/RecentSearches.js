import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import HorizontalDivider from '../../../Components/Dividers/HorizontalDivider/HorizontalDivider';
import SmallArtProjectCard from '../../../Components/Cards/SmallArtProjectCard/SmallArtProjectCard';
import FromTheTopCradle from '../../../Components/Cradles/FromTheTopCradle/FromTheTopCradle';

import styles from './RecentSearches.module.scss';

// - TEMP MOCKING DATA
import { artProjects } from '../../../Datasets/artProjects';

class RecentSearches extends React.Component {
	render() {
		return (
			<FromTheTopCradle>
				<div className={ styles.recentSearches }>
					<div className={ styles.top }>
						<h1>Recent Searches</h1>
						<HorizontalDivider/>
						<div className={ styles.recentSearchGallery }>
							{
								artProjects.slice(0,10).map((artProject, i) => (
									<SmallArtProjectCard 
										key={ i }
										shape='rounded'
										artProject={ artProject }
									/>
								))
							}
						</div>
					</div>
				</div>
			</FromTheTopCradle>
		);
	}
}



RecentSearches.contextType = ThemeContext;
export default RecentSearches;
