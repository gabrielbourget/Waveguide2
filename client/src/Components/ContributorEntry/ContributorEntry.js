import React from 'react';

import LabelAndInput from '../LabelAndInput/LabelAndInput';

import { supportedContributionTypes } from '../../Helpers/generalDataStructures';

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
		return (
			<div className={ styles.contributorEntry }>
				{ this.renderLogic(this.props) }
				<LabelAndInput 
					htmlFor='name'
					labelText='Name'
					type='text'
					name='name'
					placeholder='Name'
					value={ this.props.name }
					onChange={ this.props.onChange }
				/>				
			</div>
		);
	}
}

export default ContributorEntry;
