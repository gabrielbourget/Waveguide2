import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Mutation } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import LaggingLinesLoader from '../Loaders/LaggingLinesLoader/LaggingLinesLoader';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import HorizontalDivider from '../Dividers/HorizontalDivider/HorizontalDivider';
import { StatusOutlineInner } from '../StatusOutlineInner/StatusOutlineInner';

import { CURRENT_USER_QUERY } from '../../GraphQL/User/Queries';
import { EDIT_USER_MUTATION } from '../../GraphQL/User/Mutations';

import styles from './EditUserDetails.module.scss';

class EditUserDetails extends React.Component {
	render() {
		const initObject = prepareComponent(this.context, this.props)

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
										<HorizontalDivider height='1px' subtle/>
									</div>
								}
								<div className={ styles.formBody }>
									<LabelAndInput />
									<LabelAndInput />
									<LabelAndInput />
									<LabelAndInput />
									<LabelAndInput />
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
