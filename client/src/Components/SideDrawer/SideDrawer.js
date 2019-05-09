import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import styles from './SideDrawer.module.scss';
import { communityLinks } from './Data/communityLinks';
import { SIDE_DRAWER_OPEN_QUERY } from '../../GraphQL/Queries';
import { TOGGLE_SIDE_DRAWER_MUTATION } from '../../GraphQL/Mutations';
import { CHANGE_THEME_MUTATION } from '../../GraphQL/Mutations';

import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';
import IconButton from '../Buttons/IconButton/IconButton';
import CommunityLinks from './CommunityLinks/CommunityLinks';

// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';

// - X Icon
import { ReactComponent as XIconDarkTheme } from './SVG/XIcon/XIconDarkTheme.svg';
import { ReactComponent as XIconLightTheme } from './SVG/XIcon/XIconLightTheme.svg';
import { ReactComponent as XIconHighlighted } from './SVG/XIcon/XIconHighlighted.svg';

class SideDrawer extends React.Component {
	state = {
		communityLinksExpanded: false
	};

	handleDownIconClick = () => {
		this.setState({ communityLinksExpanded: true });
	};

	handleUpIconClick = () => {
		this.setState({ communityLinksExpanded: false });
	};	

	handleSideMenuButtonClick = () => {
		// this.props.onSideMenuButtonClick();
		// - TODO -> Trigger GraphQL stuff here
	};

	render() {
		return (
			<Query query={ SIDE_DRAWER_OPEN_QUERY }>
				{
					({ data }) => {
						const initObject = prepareComponent(this.context, data);

						return (
							<div className={ initObject.sideMenuClasses } >
								<div className={ initObject.topBarClasses }>
									<Mutation mutation={ TOGGLE_SIDE_DRAWER_MUTATION }>
										{
											(toggleSideDrawer) => (
												<IconButton 
													size='20px'
													darkTheme={ <XIconDarkTheme/> }
													lightTheme={ <XIconLightTheme/> }
													highlighted={ <XIconHighlighted/> }
													onClick={ toggleSideDrawer }
												/>
											)
										}
									</Mutation>
									<h3 className={ initObject.themeClass }>Settings</h3>
								</div>
								<div className={ styles.hDividerCradle }>
									<HorizontalDivider height='3px'/>
								</div>
								<div className={ styles.themePick }>
									<div className={ styles.label }>
										<h4>Theme</h4>
									</div>
									<div className={ styles.optionButton }>
{/*									<Mutation 
										mutation={ CHANGE_THEME_MUTATION }
										variables={{  }}
									>
										
									</Mutation>*/}
										<OutlineButton
											text='DARK'
											shape='rounded'
											onClick={ () => {
												this.props.onThemeSwitch('dark');
												this.handleSideMenuButtonClick();
											}}
										/>
									</div>
									<div className={ styles.optionButton }>
										<OutlineButton 
											text='LIGHT'
											shape='rounded'
											onClick={ () => { 
												this.props.onThemeSwitch('light');
												this.handleSideMenuButtonClick();
											}}
										/>
									</div>					
								</div>
								<h3 className={ initObject.themeClass }>Site Navigation</h3>
								<div className={ styles.hDividerCradle }>
									<HorizontalDivider height='3px'/>
								</div>
								<div className={ styles.buttonGrid }>
									<Link to='/'>					
										<OutlineButton
											text='Home'
											shape='rounded'
											onClick={ this.handleSideMenuButtonClick }
										/>
									</Link>	
									<Link to='/documentation/'>					
										<OutlineButton
											text='Documentation'
											shape='rounded'
											onClick={ this.handleSideMenuButtonClick }
										/>
									</Link>	
								</div>
								<div className={ styles.communityLinksTitleBar }>
									<h3 className={ initObject.themeClass }>Community Links</h3>
									<div className={ styles.expandCollapseButton }>
										{
											this.state.communityLinksExpanded ?
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
									</div>
								</div>
								<div className={ styles.hDividerCradle }>
									<HorizontalDivider height='3px'/>
								</div>
								{
									this.state.communityLinksExpanded &&
									<CommunityLinks communityLinks={ communityLinks }/>	
								}
							</div>
						);
					}
				}
			</Query>
		);
	}
}

const prepareComponent = (context, data) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const openClass = (data.sideDrawerOpen) ? styles.open : null;
	const sideMenuClasses = ClassNames(styles.sideMenu, themeClass, openClass);
	const topBarClasses = ClassNames(styles.topBar, themeClass);

	return {
		sideMenuClasses,
		topBarClasses
	}	
}

SideDrawer.contextType = ThemeContext;
export default SideDrawer;
