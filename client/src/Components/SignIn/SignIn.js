import React from 'react';
import ClassNames from 'classnames';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ThemeContext } from '../../ThemeContext';

import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { SIGNIN_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './SignIn.module.scss';

class SignIn extends React.Component {

	state = {
		email: '',
		password: ''
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {

		const initObject = prepareComponent(this.context);

		console.log('Init Object');
		console.table(initObject);

		return (
			<Mutation 
				mutation={ SIGNIN_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(signIn, { error, loading }) => {
						if (loading) {
							return (
								<CenteringCradle>
									<LaggingLinesLoader/>
								</CenteringCradle>
							);
						}
						if (error) return <p>Error...</p>
						return (
							<form 
								className={ initObject.signInClasses }							
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await signIn();
									this.setState({ email: '', password: ''});
								}}
							>
								<fieldset disabled={ loading } aria-busy={ loading }>
									<h2>Sign In</h2>
									<label htmlFor="email">
										Email 
										<input 
											type='email'
											name='email'
											placeholder='email'
											value={ this.state.email }
											onChange={ this.saveToState }
										/>
									</label>
									<label htmlFor='password'>
										Password 
										<input 
											type='password'
											name='password'
											placeholder='password'
											value={ this.state.password }
											onChange={ this.saveToState }
										/>
									</label>
									<button type='submit'>Sign In</button>
								</fieldset>
							</form>
						);
					}
				}
			</Mutation>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const signInClasses = ClassNames(styles.signIn, themeClass)
	
	return { signInClasses };
}

SignIn.contextType = ThemeContext;
export default SignIn;
