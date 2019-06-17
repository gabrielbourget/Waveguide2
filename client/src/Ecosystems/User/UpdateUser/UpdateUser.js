// - External Modules
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../ThemeContext';

// - External Components
import LaggingLinesLoader from '../../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../../../Components/Buttons/FilledButton/FilledButton';
import LabelAndInput from '../../../Components/LabelAndInput/LabelAndInput';
import HorizontalDivider from '../../../Components/Dividers/HorizontalDivider/HorizontalDivider';
// import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';
import IconButton from '../../../Components/Buttons/IconButton/IconButton';

// - Internal Components
import ProfilePhotoButton from './ProfilePhotoButton/ProfilePhotoButton';
import BasicInfo from './BasicInfo/BasicInfo';
import Biography from './Biography/Biography';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';
import ArtProjects from './ArtProjects/ArtProjects';

// - GraphQL
import { CURRENT_USER_QUERY } from '../../../GraphQL/User/Queries';
import { USER_DETAILS_QUERY } from '../../../GraphQL/User/Queries';
import { EDIT_USER_MUTATION } from '../../../GraphQL/User/Mutations';

// - Circle Down Icon
import CircleDownIconDarkTheme from './SVG/CircleDownIcon/CircleDownIcon_DarkTheme';
import CircleDownIconLightTheme from './SVG/CircleDownIcon/CircleDownIcon_LightTheme';
import CircleDownIconHighlighted from './SVG/CircleDownIcon/CircleDownIcon_Highlighted';
// - Circle Up Icon
import CircleUpIconDarkTheme from './SVG/CircleUpIcon/CircleUpIcon_DarkTheme';
import CircleUpIconLightTheme from './SVG/CircleUpIcon/CircleUpIcon_LightTheme';
import CircleUpIconHighlighted from './SVG/CircleUpIcon/CircleUpIcon_Highlighted';
// - Plus Icon
import { ReactComponent as PlusIconDarkTheme } from './SVG/PlusIcon/PlusIconDarkTheme.svg';
import { ReactComponent as PlusIconLightTheme } from './SVG/PlusIcon/PlusIconLightTheme.svg';
import { ReactComponent as PlusIconHighlighted } from './SVG/PlusIcon/PlusIconHighlighted.svg';

import styles from './UpdateUser.module.scss';

// - TODO -> Once login is hooked up across the stack, grab detailed user 
// 					 info from the database and populate the form with existing info. 
// 					 Once payload comes in, just set local form state with matching fields.

class UpdateUserDetails extends React.Component {

	state = {
		basicInfoOpen: false,
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
		country: '',
		socialMediaLinks: [],
		artProjects: [],
		musicLabels: [],
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

	// saveSocialLinkToState = (e) => {
	// 	this.setState([e.target.name]:)
	// }

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
					(updateUser, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form
								className={ initObject.updateUserDetailsClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await updateUser();
								}}
							>

								{/* - CARD HEADER - */}

								<div className={ initObject.titleBarClasses }>
									<h2>Update User Details</h2>
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

								{/* - CARD BODY - */}

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

									{/* - BASIC INFO SECTION - */}

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

									{/* - BIOGRAPHY SECTION - */}

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

									{/* - SOCIAL MEDIA LINKS SECTION - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Social Media Links</h4>
										<div className={ styles.right }>
											{
												(this.state.socialMediaLinksOpen) ? 
													<React.Fragment>
														<IconButton 
															size='25px'
															highlighted={ <PlusIconHighlighted /> }
															darkTheme={ <PlusIconDarkTheme /> }
															lightTheme={ <PlusIconLightTheme /> }
															onClick={ (e) => {
																// - TO_FIX -> Mutation fires off here, and I don't want that. 
																//e.preventDefault();
																const socialMediaLinks = [...this.state.socialMediaLinks];// || [];
																console.log('boop');
																console.log(socialMediaLinks);
																socialMediaLinks.push({
																	network: 'Soundcloud',
																	link: ''
																})

																console.log(socialMediaLinks);
															}}
														/>
														<IconButton 
															size='25px'
															highlighted={ <CircleUpIconHighlighted/> }
															darkTheme={ <CircleUpIconDarkTheme/> }
															lightTheme={ <CircleUpIconLightTheme/> }
															onClick={ this.toggleSocialMediaLinksSection }
														/> 
													</React.Fragment> :
													<IconButton 
														size='25px'
														highlighted={ <CircleDownIconHighlighted/> }
														darkTheme={ <CircleDownIconDarkTheme/> }
														lightTheme={ <CircleDownIconLightTheme/> }
														onClick={ this.toggleSocialMediaLinksSection }
													/>
											}
										</div>
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

									{/* - ART PROJECTS SECTION - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Art Projects</h4>
										<div className={ styles.right }>
											{
												(this.state.artProjectsOpen) ? 
													<React.Fragment>
														<Link to='/createartproject'>
															<IconButton 
																size='25px'
																highlighted={ <PlusIconHighlighted /> }
																darkTheme={ <PlusIconDarkTheme /> }
																lightTheme={ <PlusIconLightTheme /> }
																onClick={ () => {} }
															/>
														</Link>
														<IconButton 
															size='25px'
															highlighted={ <CircleUpIconHighlighted/> }
															darkTheme={ <CircleUpIconDarkTheme/> }
															lightTheme={ <CircleUpIconLightTheme/> }
															onClick={ this.toggleArtProjectsSection }
														/> 
													</React.Fragment> :
													<IconButton 
														size='25px'
														highlighted={ <CircleDownIconHighlighted/> }
														darkTheme={ <CircleDownIconDarkTheme/> }
														lightTheme={ <CircleDownIconLightTheme/> }
														onClick={ this.toggleArtProjectsSection }
													/>
											}
										</div>
									</div>				
									{
										(this.state.artProjectsOpen) &&
										<ArtProjects 
											artProjects={ this.state.artProjects }
										/>
									}

									<HorizontalDivider height='1px' subtle />

									<div className={ styles.bottom }>									
										<FilledButton
											text='Save Changes'
											type='submit'
											onClick={ () => {} }
											// onClick={ async (e) => {
											// 	e.preventDefault();
											// 	await editUser();
											// }}
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

	const updateUserDetailsClasses = ClassNames(styles.updateUserDetails, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		updateUserDetailsClasses,
		titleBarClasses
	};
}

UpdateUserDetails.contextType = ThemeContext;
export default UpdateUserDetails;
