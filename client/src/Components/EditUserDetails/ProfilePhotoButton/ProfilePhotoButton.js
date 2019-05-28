import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ProfilePhotoButton.module.scss';

// - Add Person Icon
import { ReactComponent as AddPersonIconDarkTheme } from './SVG/AddPersonIcon/AddPersonIconDarkTheme.svg';
import { ReactComponent as AddPersonIconLightTheme } from './SVG/AddPersonIcon/AddPersonIconLightTheme.svg';
// import { ReactComponent as AddPersionIconHighlighted } from './SVG/AddPersonIcon/AddPersonIconHighlighted.svg';

class ProfilePhotoButton extends React.Component {	

	handleButtonClick = (e) => {
		this.props.onClick(e);
	}

	render() {

		const icon = (this.context === 'dark') ? <AddPersonIconDarkTheme/> : <AddPersonIconLightTheme/>;

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const profilePhotoButtonClasses = ClassNames(styles.profilePhotoButton, themeClass);

		return (
			<button 
				className={ profilePhotoButtonClasses }
				onClick={ this.handleButtonClick }
			>
				<div style={{ height: '60px', width: '60px' }}>
					{ icon }
				</div>
			</button>
		);
	}
}

ProfilePhotoButton.contextType = ThemeContext;

export default ProfilePhotoButton;
