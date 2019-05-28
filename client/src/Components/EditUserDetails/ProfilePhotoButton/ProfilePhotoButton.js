import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TreeToggleButton.module.scss';

// - Expand Icon
import { ReactComponent as ExpandIconDarkTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_DarkTheme.svg';
import { ReactComponent as ExpandIconLightTheme } from './SVG/CircleExpandIcon/CircleExpandIcon_LightTheme.svg';
// import { ReactComponent as ExpandIconHighlighted } from './SVG/CircleExpandIcon/CircleExpandIcon_Highlighted.svg';

// - Close Icon
import { ReactComponent as CloseIconDarkTheme } from './SVG/CircleXIcon/CircleXIcon_DarkTheme.svg';
import { ReactComponent as CloseIconLightTheme } from './SVG/CircleXIcon/CircleXIcon_LightTheme.svg';
// import { ReactComponent as CloseIconHighlighted } from './SVG/CircleXIcon/CircleXIcon_Highlighted.svg';

class TreeToggleButton extends React.Component {	

	handleButtonClick = () => {
		this.props.onClick();
	}

	render() {

		let icon;

		if (this.props.status === 'open') {
			if (this.context === 'dark') icon = <CloseIconDarkTheme/>;
			else icon = <CloseIconLightTheme/>;
		}
		else if (this.props.status === 'closed') {
			if (this.context === 'dark') icon = <ExpandIconDarkTheme/>
				else icon = <ExpandIconLightTheme/>
		}

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const treeToggleButtonClasses = ClassNames(styles.treeToggleButton, ((this.context === 'dark') ? styles.darkTheme : styles.lightTheme));

		return (
			<button 
				className={ treeToggleButtonClasses }
				onClick={ this.handleButtonClick }
			>
				{ icon }
			</button>
		);
	}
}

TreeToggleButton.contextType = ThemeContext;

export default TreeToggleButton;
