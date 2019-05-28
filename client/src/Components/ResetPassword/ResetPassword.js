import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { Mutation } from 'react-apollo';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { RESET_PASSWORD_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './ResetPassword.module.scss';

class ResetPassword extends React.Component {

	state = {
		password: '',
		passwordConfirmation: ''
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
				mutation={ RESET_PASSWORD_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(resetPassword, { error, loading }) => {
						if (loading) return <LaggingLinesLoader />;
						if (error) return <p>Error...</p>;
						return (
							<form 
								className={ initObject.resetPasswordClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await resetPassword();
									this.setState({ password: '', passwordConfirmation: ''})
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h2>Reset Password</h2>
								</div>
								<div className={ styles.formBody }>
									<p className={ styles.prompt }>
										Please enter your new password. 
									</p>
									<LabelAndInput
										htmlFor='password'
										labelText='New Password'
										type='password'
										name='password'
										placeholder='New Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>
									<LabelAndInput
										htmlFor='passwordConfimation'
										labelText='Confirm New Password'
										type='password'
										name='passwordConfimation'
										placeholder='Confirm New Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>
									<div className={ styles.bottom }>
										<FilledButton 
											text='Reset Password'
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

	const resetPasswordClasses = ClassNames(styles.resetPassword, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		resetPasswordClasses,
		titleBarClasses
	};
};

ResetPassword.contextType = ThemeContext;
export default ResetPassword;
