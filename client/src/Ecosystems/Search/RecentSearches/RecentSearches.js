import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import HorizontalDivider from '../../../Components/Dividers/HorizontalDivider/HorizontalDivider';

import styles from './RecentSearches.module.scss';

class RecentSearches extends React.Component {
	render() {
		return (
			<div className={ styles.recentSearches }>
				<div className={ styles.top }>
					<h1>Recent Searches</h1>
					<HorizontalDivider/>
				</div>
			</div>
		);
	}
}



RecentSearches.contextType = ThemeContext;
export default RecentSearches;
