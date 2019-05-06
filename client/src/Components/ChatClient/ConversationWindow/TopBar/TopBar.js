import React from 'react';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import { ReactComponent as ChevronLeftSkinnyDarkTheme } from './Icons/ChevronLeftSkinny/ChevronLeftSkinny_DarkTheme.svg';
import { ReactComponent as ChevronLeftSkinnyLightTheme } from './Icons/ChevronLeftSkinny/ChevronLeftSkinny_LightTheme.svg';
import { ReactComponent as ChevronLeftSkinnyHighlighted } from './Icons/ChevronLeftSkinny/ChevronLeftSkinny_Highlighted.svg';

import IconButton from '../../../Buttons/IconButton/IconButton';
import CircleImage from '../../../ImageContainers/CircleImage/CircleImage';

import styles from './TopBar.module.scss';

class TopBar extends React.Component {

	handleChevronClick = () => {
		// - TODO -> Grab onclick function from higher up props passed into TopBar. 
		
	}

	render() {
		const initObject = prepareComponent(this.context);

		const src = process.env.PUBLIC_URL + '/Images/Arael.png';

		return (
			<div className={ initObject.topBarClasses }>
				<IconButton 
					size='10px'
					darkTheme={ <ChevronLeftSkinnyDarkTheme/> }
					lightTheme={ <ChevronLeftSkinnyLightTheme/> }
					highlighted={ <ChevronLeftSkinnyHighlighted/> }
					onClick={ this.handleChevronClick }
				/>
				<CircleImage
					src={ src }
					alt='Starstuff'
					radius='25px'
				/>
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const topBarClasses = ClassNames(styles.topBar, themeClass);

	return { topBarClasses }
};

TopBar.contextType = ThemeContext;
export default TopBar;
