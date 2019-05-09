import React from 'react';
import { ThemeContext } from '../../../ThemeContext';
import SocialMediaIconComponents from '../../../Helpers/socialMediaIconComponents';

import ProfileImage from '../../ImageContainers/ProfileImage/ProfileImage';
import IconButton from '../../Buttons/IconButton/IconButton';
import HorizontalDivider from '../../Dividers/HorizontalDivider/HorizontalDivider';

// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';

import styles from './TwoSizeCard.module.scss';
import { prepareLinkGallery, prepareComponent } from './helpers';

class TwoSizeCard extends React.Component {
	state = {
		expanded: false
	};

	// - Trigger a card expansion.
	handleDownIconClick = () => {
		this.setState({ expanded: true });
	};

	// - Trigger a card retraction.
	handleUpIconClick = () => {
		this.setState({ expanded: false });
	};

	// - Trigger a modal toggle.
	handleExpandIconClick = () => {
		// - TODO -> Hook this up to a modal component eventually.
	};

	render() {
		const initObject = prepareComponent(this.context, this.state, this.props, styles);
		const artistSocialLinks = prepareLinkGallery(this.props, SocialMediaIconComponents);

		return (
			<div className={ initObject.twoSizeCardClasses }>
				<div className={ initObject.headerClasses }>
					<div className={ initObject.cardTitleClasses }>
						<h3>{ this.props.name }</h3>
					</div>
					<div className={ initObject.topCardButtonClasses }>
						{
							this.state.expanded ?
							<IconButton 
								size='25px'
								highlighted={ <CircleUpIconHighlighted/> }
								darkTheme={ <CircleUpIconDarkTheme/> }
								lightTheme={ <CircleUpIconLightTheme/> }
								onClick={ this.handleUpIconClick }
							/> :
							<IconButton 
								size='25px'
								highlighted={ <CircleDownIconHighlighted/> }
								darkTheme={ <CircleDownIconDarkTheme/> }
								lightTheme={ <CircleDownIconLightTheme/> }
								onClick={ this.handleDownIconClick }
							/>
						}
{/*						<IconButton
							size='25px'
							highlighted={ <CircleExpandIconHighlighted/> }
							darkTheme={ <CircleExpandIconDarkTheme/> }
							lightTheme={ <CircleExpandIconLightTheme/> }
							onClick={ this.handleExpandIconClick }
						/>*/}
					</div>
				</div>
				<div className={ initObject.bodyClasses }>
					<ProfileImage
						src={ this.props.src }
						title={ this.props.name }
					/>
					{
						this.state.expanded ?
						<div className={ initObject.cardBottomClasses }>
							<div className={ styles.title }>
								<h3>LINKS</h3>
							</div>
							<div className={ styles.hDividerCradle }>
								<HorizontalDivider height='3px'/>
							</div>
							<div className={ styles.linkListContainer }>
  						{
								artistSocialLinks.map((LinkInfo,index) => (
									<a 
										key={ index }
										href={ LinkInfo.link } 
										target='_blank'
										rel='noopener noreferrer' 
									>											
										<IconButton
											key={ index }
											size='50px'
											darkTheme={ React.createElement(LinkInfo.icons['darkTheme']) }
											highlighted={ React.createElement(LinkInfo.icons['highlighted']) }
											lightTheme={ React.createElement(LinkInfo.icons['lightTheme']) }
											onClick={ () => {} }
										/>
									</a>													
								))
							}
							</div>
						</div> :
						null
					}
				</div>
			</div>
		);
	}

}


TwoSizeCard.contextType = ThemeContext;
export default TwoSizeCard;
