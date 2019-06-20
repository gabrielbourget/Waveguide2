// -- WITHIN PROJECT BOUNDARY -- //

// - External Modules
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';

// -- WITHIN /SRC -- //

import { ThemeContext } from '../../../ThemeContext';
import { keySignatureEnum } from '../../../Helpers/generalDataStructures';

// - External Components
import LaggingLinesLoader from '../../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../../../Components/Buttons/FilledButton/FilledButton';
import LabelAndInput from '../../../Components/LabelAndInput/LabelAndInput';
import HorizontalDivider from '../../../Components/Dividers/HorizontalDivider/HorizontalDivider';
// import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';
import IconButton from '../../../Components/Buttons/IconButton/IconButton';

// - GraphQL
import { CURRENT_USER_QUERY } from '../../../GraphQL/User/Queries';
import { SONG_GROUP_DETAILS_QUERY } from '../../../GraphQL/SongGroup/Queries';
import { UPDATE_SONG_GROUP_MUTATION } from '../../../GraphQL/SongGroup/Mutations';

// -- WITHIN COMPONENT DIRECTORY -- //

// - Internal Components 
import SongGroupArtButton from './SongGroupArtButton/SongGroupArtButton';
import BasicInfo from './BasicInfo/BasicInfo';
import AdvancedInfo from './AdvancedInfo/AdvancedInfo';
import Description from './Description/Description';
import ExternalLinks from './ExternalLinks/ExternalLinks';
import Songs from '../Songs/Songs';

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

import styles from './UpdateSongGroup.module.scss';

class UpdateSongGroup extends React.Component {
	state = {
		basicInfoOpen: true,
		advancedInfoOpen: false,
		songsOpen: false,
		descriptionOpen: false,
		externalLinksOpen: false,
		title: '',
		duration: '',
		contributors: [],
		description: '',
		releaseDate: {},
		externalLinks: []
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

	saveSocialMediaLinkToState = (e) => {
		
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

	toggleAdvancedInfoSection = () => {
		const current = this.state.advancedInfoOpen;
		this.setState({ advancedInfoOpen: !current });
	};

	toggleSongsSection = () => {
		const current = this.state.songsOpen;
		this.setState({ songsOpen: !current });
	};

	toggleDescriptionSection = () => {
		const current = this.state.descriptionOpen;
		this.setState({ descriptionOpen: !current });
	};

	toggleExternalLinksSection = () => {
		const current = this.state.externalLinksOpen;
		this.setState({ externalLinksOpen: !current });
	};	

	render() {
		const initObject = prepareComponent(this.context, this.props);

		return (
			<Mutation
				mutation={ UPDATE_SONG_GROUP_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(updateSongGroup, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form
								className={ initObject.updateSongGroupClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await updateSongGroup();
								}}
							>
								{/* - CARD HEADER - */}
								<div className={ initObject.titleBarClasses }>
									<h2>Update Song Group</h2>
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
										<SongGroupArtButton onClick={ this.photoUpload }/>
									</div>

									{/* - BASIC INFO SECTION - */}
									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center' }}>Basic Info</h4>
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
												title: this.state.title,
												duration: this.state.duration
											}}
											onChange={ this.saveToState }
										/>
									}

									<HorizontalDivider height='1px' subtle />

									{/* - ADVANCED INFO SECTION - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center' }}>Advanced Info</h4>
										{
											(this.state.advancedInfoOpen) ?
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleAdvancedInfoSection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleAdvancedInfoSection }
											/>											
										}
									</div>
									{
										(this.state.advancedInfoOpen) &&
										<AdvancedInfo 
											info={{
												contributors: this.state.contributors,
												releaseDate: this.state.releaseDate,
											}}
											onChange={ this.saveToState }
										/>
									}

									<HorizontalDivider height='1px' subtle />	

									{/* - SONGS SECTION SECTION - */}
									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center' }}>Songs</h4>
										<div className={ styles.right }>										
											{
												(this.state.songsOpen) ? 
													<React.Fragment>
														<IconButton 
															size='25px'
															highlighted={ <PlusIconHighlighted /> }
															darkTheme={ <PlusIconDarkTheme /> }
															lightTheme={ <PlusIconLightTheme /> }
															onClick={ (e) => {
																// - TO_FIX -> Mutation fires off here, and I don't want that. 
																//e.preventDefault();
																// const socialMediaLinks = [...this.state.socialMediaLinks];// || [];
																// console.log('boop');
																// console.log(socialMediaLinks);
																// socialMediaLinks.push({
																// 	network: 'Soundcloud',
																// 	link: ''
																// })

																// console.log(socialMediaLinks);
															}}
														/>
														<IconButton 
															size='25px'
															highlighted={ <CircleUpIconHighlighted/> }
															darkTheme={ <CircleUpIconDarkTheme/> }
															lightTheme={ <CircleUpIconLightTheme/> }
															onClick={ this.toggleSongsSection }
														/> 
													</React.Fragment> :
													<IconButton 
														size='25px'
														highlighted={ <CircleDownIconHighlighted/> }
														darkTheme={ <CircleDownIconDarkTheme/> }
														lightTheme={ <CircleDownIconLightTheme/> }
														onClick={ this.toggleSongsSection }
													/>
											}
										</div>
									</div>
									{
										(this.state.songsOpen) &&
										<Songs songs={ this.state.songs } />
									}

									<HorizontalDivider height='1px' subtle />

									{/* - DESCRIPTION SECTION - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>Description</h4>
										{
											(this.state.descriptionOpen) ? 
											<IconButton 
												size='25px'
												highlighted={ <CircleUpIconHighlighted/> }
												darkTheme={ <CircleUpIconDarkTheme/> }
												lightTheme={ <CircleUpIconLightTheme/> }
												onClick={ this.toggleDescriptionSection }
											/> :
											<IconButton 
												size='25px'
												highlighted={ <CircleDownIconHighlighted/> }
												darkTheme={ <CircleDownIconDarkTheme/> }
												lightTheme={ <CircleDownIconLightTheme/> }
												onClick={ this.toggleDescriptionSection }
											/>
										}
									</div>
									{
										(this.state.descriptionOpen) && 
										<Description 
											value={ this.state.description }
											onChange={ this.saveToState }
											name='description'
										/>
									}

									<HorizontalDivider height='1px' subtle />

									{/* - EXTERNAL LINKS SECTION - */}

									<div className={ styles.sectionTitleBar }>
										<h4 style={{ 'display':'grid', 'alignItems':'center'}}>External Links</h4>
										<div className={ styles.right }>
											{
												(this.state.externalLinksOpen) ? 
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
															onClick={ this.toggleExternalLinksSection }
														/> 
													</React.Fragment> :
													<IconButton 
														size='25px'
														highlighted={ <CircleDownIconHighlighted/> }
														darkTheme={ <CircleDownIconDarkTheme/> }
														lightTheme={ <CircleDownIconLightTheme/> }
														onClick={ this.toggleExternalLinksSection }
													/>
											}
										</div>
									</div>
									{
										(this.state.externalLinksOpen) &&
										<ExternalLinks 
											//newLinkEntries={ this.state.newLinkEntries }
											externalLinks={ this.state.externalLinks }
											onChange={ this.saveToState }
										/>
									}

									<HorizontalDivider height='1px' subtle />

									<div className={ styles.bottom }>									
										<FilledButton
											text='Update Song Group'
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
						)
					}
				}
			</Mutation>
		);
	}
}

const prepareComponent = (context, { shape }) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (shape === 'rounded') ? styles.rounded : null;

	const updateSongGroupClasses = ClassNames(styles.updateSongGroup, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		updateSongGroupClasses,
		titleBarClasses
	};
}

UpdateSongGroup.contextType = ThemeContext;
export default UpdateSongGroup;
