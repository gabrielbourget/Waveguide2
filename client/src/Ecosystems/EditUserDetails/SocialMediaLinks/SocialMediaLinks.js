import React from 'react';
import ClassNames from 'classnames';

import LinkEntry from './LinkEntry/LinkEntry';

import styles from './SocialMediaLinks.module.scss';

class SocialMediaLinks extends React.Component {

	state = {
		windowWidth: window.innerWidth,
		newLinkEntries: 0
	};

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};	

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);

	renderLogic = (props) => {
		const numLinks = props.socialMediaLinks.length;
		const { socialMediaLinks, newLinkEntries } = props;

		// - If user has no social media links, pop in one field to 
		//   prompt them to start adding them.
		if (numLinks === 0) return (
			<div className={ styles.socialMediaLinks }>			
				<LinkEntry 
					network='soundCloud'
					link=''
				/>
			</div>
		);

		// - Return number of links they have + number of new fields 
		//   they've popped down but haven't committed yet.
		return (
			<div className={ styles.socialMediaLinks }>			
				{
					(socialMediaLinks).map((linkEntry, i) => (
						<LinkEntry 
							network={ linkEntry.network }
							link={ linkEntry.link }
							onChange={ props.onChange }
						/>
					))
				}
				{/*
					for(let i=0; i<newLinkEntries; ++i) {
						<LinkEntry
							network='soundCloud'
							link=''
						/>
					}
				*/}
			</div>
		);
	};

	render() {


		return (
			<div className={ styles.socialMediaLinks }>
				{ this.renderLogic(this.props) }
			</div>
		);
	};
}


export default SocialMediaLinks;
