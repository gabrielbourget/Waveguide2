import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { ThemeContext } from '../../ThemeContext';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { REGISTER_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './Register.module.scss';

class Register extends React.Component {

	state = {
		username: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	};

	static propTypes = {
		shape: PropTypes.string
	}

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render () {

		const initObject = prepareComponent(this.context, this.props);

		return (
			<Mutation 
				mutation={ REGISTER_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(register, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form 
								className={ initObject.registerClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await register();
									this.setState({
										username: '',
										email: '',
										password: '',
										passwordConfirmation: ''
									})
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h2>Register</h2>
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
										htmlFor='password'
										labelText='Password'
										type='password'
										name='password'
										placeholder='Password'
										value={ this.state.password }
										onChange={ this.saveToState }
									/>
									<LabelAndInput 
										htmlFor='passwordConfirmation'
										labelText='Confirm Password'
										type='password'
										name='passwordConfirmation'
										placeholder='Confirm Password'
										value={ this.state.passwordConfirmation }
										onChange={ this.saveToState }
									/>
									<div className={ styles.bottom }>
										<FilledButton
											text='Register &rarr;'
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

	const registerClasses = ClassNames(styles.register, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);
	const labelClasses = ClassNames(styles.label, themeClass);
	const inputClasses = ClassNames(styles.input, themeClass);

	return {
		registerClasses,
		titleBarClasses,
		labelClasses,
		inputClasses
	}
}

Register.contextType = ThemeContext;
export default Register;









