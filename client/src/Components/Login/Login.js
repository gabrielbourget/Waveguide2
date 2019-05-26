import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ThemeContext } from '../../ThemeContext';

import CenteringCradle from '../Cradles/CenteringCradle/CenteringCradle';
import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { LOGIN_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './Login.module.scss';

class Login extends React.Component {

	state = {
		email: '',
		password: ''
	};

	static propTypes = {
		shape: PropTypes.string
	}

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {

		const initObject = prepareComponent(this.context, this.props);

		console.log('Init Object');
		console.table(initObject);

		return (
			<Mutation 
				mutation={ LOGIN_MUTATION }
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
								className={ initObject.loginClasses }							
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await signIn();
									this.setState({ email: '', password: ''});
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h1>Log In</h1>
								</div>
								<div className={ styles.formBody }>								
									<label 
										className={ initObject.labelClasses }
										htmlFor="email"
									>
										Email 
										<input 
											type='email'
											name='email'
											placeholder='Email'
											value={ this.state.email }
											onChange={ this.saveToState }
										/>
									</label>
									<label 
										className={ initObject.labelClasses }
										htmlFor='password'
									>
										Password 
										<input 
											type='password'
											name='password'
											placeholder='Password'
											value={ this.state.password }
											onChange={ this.saveToState }
										/>
									</label>
									<FilledButton
										text='Log In &rarr;'
										type='submit'
										onClick={() => {}}
									/>
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

	const loginClasses = ClassNames(styles.login, themeClass, shapeClass)
	const titleBarClasses = ClassNames(styles.titleBar, themeClass);
	const labelClasses = ClassNames(styles.label, themeClass);
	
	return { 
		loginClasses,
		titleBarClasses,
		labelClasses
	};
}

Login.contextType = ThemeContext;
export default Login;
