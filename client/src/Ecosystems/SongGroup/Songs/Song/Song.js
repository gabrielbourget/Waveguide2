import React from 'react';
import ClassNames from 'classnames';

import CoverImage from '../../../../Components/ImageContainers/CoverImage/CoverImage';
import { ThemeContext } from '../../../../ThemeContext';

// - Plus Icon
import { ReactComponent as ImageIconDarkTheme } from './SVG/ImageIcon/ImageIconDarkTheme.svg';
import { ReactComponent as ImageIconLightTheme } from './SVG/ImageIcon/ImageIconLightTheme.svg';
import { ReactComponent as ImageIconHighlighted } from './SVG/ImageIcon/ImageIconHighlighted.svg';

import styles from './Song.module.scss';

class Song extends React.Component {

	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.songClasses }>
				<div className={ styles.songImage }>
					<div className={ styles.imageCradle }>
						{
							(this.context === 'dark') ?
							<CoverImage 
								src='./SVG/ImageIcon/ImageIconDarkTheme.svg'
								name='image'
							/> :
							<CoverImage 
								src='./SVG/ImageIcon/ImageIconLightTheme.svg'
								name='image'
							/>
						}
					</div>
				</div>
				<div className={ styles.songTitle }>
					<p>{ this.props.title }</p>
				</div>
				{/*<div>one</div>*/}
				{/*<div>two</div>*/}
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const songClasses = ClassNames(styles.song, themeClass);

	return { songClasses };
}

Song.contextType = ThemeContext;
export default Song;
