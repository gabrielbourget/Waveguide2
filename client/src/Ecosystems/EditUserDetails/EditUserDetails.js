import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Mutation } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

// - External Components
import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
// import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';
import IconButton from '../Buttons/IconButton/IconButton';

// - Internal Components
import ProfilePhotoButton from './ProfilePhotoButton/ProfilePhotoButton';
import BasicInfo from './BasicInfo/BasicInfo';
import Biography from './Biography/Biography';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';

// - GraphQL
import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { USER_DETAILS_QUERY } from '../../GraphQL/User/Queries';
import { EDIT_USER_MUTATION } from '../../GraphQL/User/Mutations';

// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';

import styles from './EditUserDetails.module.scss';

// - TODO -> Once login is hooked up across the stack, grab detailed user 
// 					 info from the database and populate the form with existing info. 
// 					 Once payload comes in, just set local form state with matching fields.

class EditUserDetails extends React.Component {

	state = {
		basicInfoOpen: true,
		biographyOpen: false,
		socialMediaLinksOpen: false, 
		artProjectsOpen: false,
		newLinkEntries: 0,
		username: '',
		name: '',
		firstName: '',
		middleNames: [],
		lastName: '',
		email: '',
		image: '',
		biography: '',
		city: '',
		artProjects: [],
		musicLabels: [],
		socialMediaLinks: []
	};

	// - TODO -> Find a way to fire off native file browser by 
	// 					 clicking on the profile image component like it 
	// 					 works in Facebook. Then hit the asset server to 
	// 					 upload the image and get back a URL to send to the 
	// 					 database.
	photoUpload = (e) => {
		e.preventDefault();
	};

	static propTypes = {
		shape: PropTypes.string
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};	

	// - TODO -> Find a way to refactor these into one 
	// 					 without having to make a seperate version 
	// 					 of IconButton that passes the section name 
	// 					 to its onClick function. 
	toggleBasicInfoSection = () => {
		const current = this.state.basicInfoOpen;
		this.setState({ basicInfoOpen: !current });
	};

	toggleBiographySection = () => {
		const current = this.state.biographyOpen;
		this.setState({ biographyOpen: !current });
	};

	toggleSocialMediaLinksSection = () => {
		const current = this.state.socialMediaLinksOpen;
		this.setState({ socialMediaLinksOpen: !current });
	};	

	toggleArtProjectsSection = () => {
		const current = this.state.artProjectsOpen;
		this.setState({ artProjectsOpen: !current });
	};

	render() {
		const initObject = prepareComponent(this.context, this.props);

		return (
			<Mutation
				mutation={ EDIT_USER_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(editUser, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form
								className={ initObject.editUserDetailsClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await editUser();
									this.setState({ 
										email: '', 
										password: '' 
									})
								}}
							>

								{/* - HEADER - */}

								<div className={ initObject.titleBarClasses }>
									<h2>User Profile Details</h2>
								</div>
								{
									(this.context === 'dark') &&									
									<div 
										style={{ 
											padding: '0px 30px', 
											display: 'grid',
											alignItems: 'center'
										}}
									>
										<HorizontalDivider height='3px'/>
									</div>
								}

								{/* - BODY - */}

								<div className={ styles.formBody }>
									<div style={{
										height: 'auto',
										width: '100%',
										display: 'grid',
										placeItems: 'center',
										placeContent: 'center'
									}}>
										<ProfilePhotoButton onClick={ this.photoUpload }/>
									</div>

									{/* - BASIC INFO - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Basic Info</h4>
										{
											(this.state.basicInfoOpen) ? 
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleBasicInfoSection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleBasicInfoSection }
											/>
										}
									</div>
									{
										(this.state.basicInfoOpen) &&									
										<BasicInfo 
											info={{
												username: this.state.username,
												email: this.state.email,
												name: this.state.name,
												firstName: this.state.firstName,
												lastName: this.state.lastName,
												city: this.state.city
											}}
											onChange={ this.saveToState }
										/>	
									}

									<HorizontalDivider height='1px' subtle />

									{/* - BIOGRAPHY - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Biography</h4>
										{
											(this.state.biographyOpen) ? 
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleBiographySection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleBiographySection }
											/>
										}
									</div>
									{
										(this.state.biographyOpen) &&
										<Biography 
											value={ this.state.biography }
											onChange={ this.saveToState }
											name='biography'
										/>
									}

									<HorizontalDivider height='1px' subtle />

									{/* - SOCIAL MEDIA LINKS - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Social Media Links</h4>
										{
											(this.state.socialMediaLinksOpen) ? 
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleSocialMediaLinksSection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleSocialMediaLinksSection }
											/>
										}
									</div>
									{
										(this.state.socialMediaLinksOpen) &&
										<SocialMediaLinks 
											newLinkEntries={ this.state.newLinkEntries }
											socialMediaLinks={ this.state.socialMediaLinks }
											onChange={ this.saveToState }
										/>
									}
									
									<HorizontalDivider height='1px' subtle />

									{/* - ART PROJECTS - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Art Projects</h4>
										{
											(this.state.artProjectsOpen) ? 
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleArtProjectsSection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleArtProjectsSection }
											/>
										}
									</div>
									<div className={ styles.bottom }>									
										<FilledButton
											text='Save Changes'
											type='submit'
											onClick={() => {}}
										/>
									</div>								
								</div>							
							</form>							
						);
					}
				}
			</Mutation>
		);
	}
}

const prepareComponent = (context, { shape }) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (shape === 'rounded') ? styles.rounded : null;

	const editUserDetailsClasses = ClassNames(styles.editUserDetails, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		editUserDetailsClasses,
		titleBarClasses
	};
}

EditUserDetails.contextType = ThemeContext;
export default EditUserDetails;
