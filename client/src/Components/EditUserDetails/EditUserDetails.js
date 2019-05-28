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
import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';

// - Internal Components
import ProfilePhotoButton from './ProfilePhotoButton/ProfilePhotoButton';
import BasicInfo from './BasicInfo/BasicInfo';

// - GraphQL
import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { USER_DETAILS_QUERY } from '../../GraphQL/User/Queries';
import { EDIT_USER_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './EditUserDetails.module.scss';

// - TODO -> Once login is hooked up across the stack, grab detailed user 
// 					 info from the database and populate the form with existing info. 
// 					 Once payload comes in, just set local form state with matching fields.

class EditUserDetails extends React.Component {

	state = {
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
	}

	photoUpload = (e) => {
		e.preventDefault();
	};

	static propTypes = {
		shape: PropTypes.string
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
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
									<h4>Basic Info</h4>
									<LabelAndInput 
										htmlFor='username'
										labelText='Username'
										type='text'
										name='username'
										placeholder='Username'
										value={ this.state.username }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='email'
										labelText='Email'
										type='email'
										name='email'
										placeholder='Email'
										value={ this.state.email }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='name'
										labelText='Name'
										type='text'
										name='name'
										placeholder='Name'
										value={ this.state.name }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='firstName'
										labelText='First Name'
										type='text'
										name='firstName'
										placeholder='First Name'
										value={ this.state.firstName }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='lastName'
										labelText='Last Name'
										type='text'
										name='lastName'
										placeholder='Last Name'
										value={ this.state.lastName }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='city'
										labelText='City'
										type='text'
										name='city'
										placeholder='City'
										value={ this.state.city }
										onChange={ this.saveToState }
									/>	
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
