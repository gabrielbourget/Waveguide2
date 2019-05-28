import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { REQUEST_RESET_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './RequestReset.module.scss';

class RequestReset extends React.Component {

	state = {
		email: ''
	};

	static propTypes = {
		shape: PropTypes.string
	};

	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render () {
		const initObject = prepareComponent(this.context, this.props);

		return (
				<Mutation 
				mutation={ REQUEST_RESET_MUTATION }
				variables={ this.state }
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{
					(requestReset, { error, loading }) => {
						if (loading) return <LaggingLinesLoader/>;
						if (error) return <p>Error...</p>;
						return (
							<form 
								className={ initObject.requestResetClasses }
								method='post'
								onSubmit={ async (e) => {
									e.preventDefault();
									await requestReset();
									this.setState({ email: '' });
								}}
							>
								<div className={ initObject.titleBarClasses }>
									<h2>Request Reset</h2>
								</div>
								<div className={ styles.formBody }>
									<p className={ styles.prompt }>
										Enter your email, and you'll receive a link
										to reset your password.
									</p>
									<LabelAndInput 
										htmlFor='email'
										labelText='Email'
										type='email'
										name='email'
										placeholder='Email'
										value={ this.state.email }
										onChange={ this.saveToState }
									/>
									<div className={ styles.bottom }>
										<FilledButton
											text='Request Reset'
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

	const requestResetClasses = ClassNames(styles.requestReset, themeClass, shapeClass);
	const titleBarClasses = ClassNames(styles.titleBar, themeClass, shapeClass);

	return {
		requestResetClasses,
		titleBarClasses
	}
}

RequestReset.contextType = ThemeContext;
export default RequestReset;
