import React from 'react';

import IconButton from '../../../../../Components/Buttons/IconButton/IconButton';

import ContributorEntry from '../../../../../Components/ContributorEntry/ContributorEntry';

// - Plus Icon
import { ReactComponent as PlusIconDarkTheme } from './SVG/PlusIcon/PlusIconDarkTheme.svg';
import { ReactComponent as PlusIconLightTheme } from './SVG/PlusIcon/PlusIconLightTheme.svg';
import { ReactComponent as PlusIconHighlighted } from './SVG/PlusIcon/PlusIconHighlighted.svg';

import styles from './Contributors.module.scss';

class Contributors extends React.Component {

	state = {
		windowWidth: window.innerWidth,
		newContributorEntries: 0
	};

	handleResize = () => this.setState( { windowWidth: window.innerWidth });

	componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};	

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);

	renderLogic = (props) => {
		const numContributors = this.props.contributors.length;
		const { contributors } = this.props;

		// - If user has no social media links, pop in one field to 
		//   prompt them to start adding them.
		if (numContributors === 0) return (
			<React.Fragment>
				<ContributorEntry 
				  name=''
					contributionRoles={ [] }
					onChange={ props.onChange }
				/>
				<ContributorEntry 
					name=''
					contributionRoles={ [] }
					onChange={ props.onChange }
				/>				
			</React.Fragment>
		);

		// - Return number of contributors the song has + number of new 
		//   contributor fields they've popped down but haven't committed yet.
		return (
			<React.Fragment>			
				{
					(contributors).map((contributor, i) => (
						<ContributorEntry 
							name={ contributor.name }
							contributionRoles={ contributor.contributions }
							onChange={ props.onChange }
						/>
					))
				}
				{/*
					for(let i=0; i<newLinkEntries; ++i) {
						<ContributorEntry
							name=''
							contributionRoles={[]}
							onChange={ props.onChange }
						/>
					}
				*/}
			</React.Fragment>
		);			
	}

	render() {
		return (
			<div className={ styles.contributors }>
				<div className={ styles.top }>
					<h5 style={{ 'display':'grid', 'alignContent':'center' }}>Contributors</h5>
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
		);
	}
}

export default Contributors;
