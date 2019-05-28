import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';

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
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {

		const initObject = prepareComponent(this.context, this.props);

		return (
			<Mutation 
				mutation={ LOGIN_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(login, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form 
								className={ initObject.loginClasses }							
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await login();
									this.setState({ email: '', password: ''});
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h2>Log In</h2>
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
									<div className={ styles.bottom }>									
										<FilledButton
											text='Log In &rarr;'
											type='submit'
											onClick={() => {}}
										/>
										<div className={ styles.right }>
											<Link to='/register'>
												<h5>Register</h5>
											</Link>
											<Link to='/forgotpassword'>
												<h5>Forgot Password</h5>
											</Link>
										</div>
									</div>

{/*									<StatusOutlineInner 
										status='problem'
										top='5px'
										left='5px'
									/>*/}
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
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);
	
	return { 
		loginClasses,
		titleBarClasses
	};
}

Login.contextType = ThemeContext;
export default Login;
