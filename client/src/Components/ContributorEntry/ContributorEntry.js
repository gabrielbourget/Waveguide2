import React from 'react';
import ClassNames from 'classnames';

import LabelAndInput from '../LabelAndInput/LabelAndInput';
import IconButton from '../Buttons/IconButton/IconButton';
import { ThemeContext } from '../../ThemeContext';

import { supportedContributionTypes } from '../../Helpers/generalDataStructures';

// - Plus Icon
import { ReactComponent as PlusIconDarkTheme } from './SVG/PlusIcon/PlusIconDarkTheme.svg';
import { ReactComponent as PlusIconLightTheme } from './SVG/PlusIcon/PlusIconLightTheme.svg';
import { ReactComponent as PlusIconHighlighted } from './SVG/PlusIcon/PlusIconHighlighted.svg';

import styles from './ContributorEntry.module.scss';

class ContributorEntry extends React.Component {
	
	state={
		name: this.props.name,
		contributionRoles: this.props.contributionRoles,
		newContributionRoles: []
	};

	renderLogic = (props) => {
		const numContributionRoles = this.state.contributionRoles.length;
		const { contributionRoles } = this.state;

		if (numContributionRoles === 0) {
			return (
				<select 
					name="rolePicker"
					value='PRODUCTION_CONTRIBUTION'
					onChange={ this.props.onChange }
				>
					{
						Object.keys(supportedContributionTypes).map((key, i) => (
							<option 
								value={ key }
								key={ i }
							>
								{ supportedContributionTypes[key] }
							</option>
						))
					}
				</select>				
			);
		}

		return (
			<React.Fragment>			
				{
					(contributionRoles).map((contributionRole, i) => (
						<select 
							name="rolePicker"
							value={ contributionRole }
							onChange={ this.props.onChange }
						>
							{
								Object.keys(supportedContributionTypes).map((key, i) => (
									<option 
										value={ key }
										key={ i }
									>
										{ supportedContributionTypes[key] }
									</option>
								))
							}
						</select>	
					))
				}
				{/*
				{
					(newContributionRoles).map((contributionRole, i) => (
						<select 
							name="rolePicker"
							value={ contributionRole }
							onChange={ this.props.onChange }
						>
							{
								Object.keys(supportedContributionTypes).map((key, i) => (
									<option 
										value={ key }
										key={ i }
									>
										{ supportedContributionTypes[key] }
									</option>
								))
							}
						</select>	
					))
				}
			*/}
			</React.Fragment>			
		);

	}

	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.contributorEntryClasses }>
				<LabelAndInput 
					htmlFor='name'
					labelText='Name'
					type='text'
					name='name'
					placeholder='Name'
					value={ this.props.name }
					onChange={ this.props.onChange }
				/>	
				<div className={ styles.roles }>
					<div className={ styles.top }>
						<h6 style={{ 'display':'grid', 'alignContent':'center' }}>Contribution Types</h6>
						<IconButton 
							size='25px'
							highlighted={ <PlusIconHighlighted /> }
							darkTheme={ <PlusIconDarkTheme /> }
							lightTheme={ <PlusIconLightTheme /> }
							onClick={ () => {} }
						/>						
					</div>
					<div className={ styles.body }>
						{ this.renderLogic(this.props) }
					</div>
				</div>			
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const contributorEntryClasses = ClassNames(styles.contributorEntry, themeClass);

	return { contributorEntryClasses };
}

ContributorEntry.contextType = ThemeContext;
export default ContributorEntry;
