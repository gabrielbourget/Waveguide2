import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { Mutation } from 'react-apollo';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';

/**
 * - TODO -> Find some way to debounce the password match query until 
 *   				 something like 3seconds after onchange in the field in order
 *   				 to let the user know that they don't match and that that's 
 *   				 going to have to be resolved before moving on.
 */
import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { PASSWORD_MATCH_QUERY } from '../../GraphQL/User/Queries';
import { CHANGE_PASSWORD_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './ChangePassword.module.scss';

class ChangePassword extends React.Component {
	state = {
		oldPassword: '',
		newPassword: '',
		newPasswordConfirmation: ''
	};

	static propTypes = {
		shape: PropTypes.string
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const initObject = prepareComponent(this.context, this.props);
		console.log(initObject);
		return (
			<Mutation
				mutation={ CHANGE_PASSWORD_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(changePassword, { error, loading }) => {
						if (loading) return <LaggingLinesLoader />;
						if (error) return <p>Error...</p>;
						return (
							<form 
								className={ initObject.changePasswordClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await changePassword();
									this.setState({ password: '', passwordConfirmation: ''})
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h2>Change Password</h2>
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
									<p className={ styles.prompt }>
										Please enter your new password. 
									</p>
									<LabelAndInput
										htmlFor='oldpassword'
										labelText='Old Password'
										type='password'
										name='oldPassword'
										placeholder='Old Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>										
									<LabelAndInput
										htmlFor='newpassword'
										labelText='New Password'
										type='password'
										name='password'
										placeholder='New Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>
									<LabelAndInput
										htmlFor='newPasswordConfimation'
										labelText='Confirm New Password'
										type='password'
										name='passwordConfimation'
										placeholder='Confirm New Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>
									<div className={ styles.bottom }>
										<FilledButton 
											text='Change Password'
											type='submit'
											onClick={ () => {} }
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

const prepareComponent = (context, props) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (props.shape === 'rounded') ? styles.rounded : null;

	const changePasswordClasses = ClassNames(styles.changePassword, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		changePasswordClasses,
		titleBarClasses
	};
};

ChangePassword.contextType = ThemeContext;
export default ChangePassword;
