import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ProfilePhotoButton.module.scss';

// - Add Person Icon
import { ReactComponent as AddPersonIconDarkTheme } from './SVG/AddPersonIcon/AddPersonIconDarkTheme.svg';
import { ReactComponent as AddPersonIconLightTheme } from './SVG/AddPersonIcon/AddPersonIconLightTheme.svg';
// import { ReactComponent as AddPersionIconHighlighted } from './SVG/AddPersonIcon/AddPersonIconHighlighted.svg';

// - Image Icon
import { ReactComponent as ImageIconDarkTheme } from './SVG/ImageIcon/ImageIconDarkTheme.svg';
import { ReactComponent as ImageIconLightTheme } from './SVG/ImageIcon/ImageIconLightTheme.svg';
// import { ReactComponent as ImageIconHighlighted } from './SVG/ImageIcon/ImageIconHighlighted'; 

// - Plus Icon
import { ReactComponent as PlusIconDarkTheme } from './SVG/PlusIcon/PlusIconDarkTheme.svg';
import { ReactComponent as PlusIconLightTheme } from './SVG/PlusIcon/PlusIconLightTheme.svg';

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
				<div style={{ 
					height: '30px', 
					width: '30px',
					position: 'absolute',
					left: '35%',
					bottom: '35%'
					//display: 'grid',
					//placeContent: 'center'
				}}>
					{ icon }
				</div>
			</button>
		);
	}
}

ProfilePhotoButton.contextType = ThemeContext;

export default ProfilePhotoButton;
