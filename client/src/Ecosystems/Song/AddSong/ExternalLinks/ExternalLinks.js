import React from 'react';
import ClassNames from 'classnames';

import LinkEntry from './LinkEntry/LinkEntry';

import styles from './ExternalLinks.module.scss';

class ExternalLinks extends React.Component {

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
		const numLinks = props.externalLinks.length;
		const { externalLinks, newLinkEntries } = props;

		// console.log(this.props.onChange);

		// - If user has no social media links, pop in one field to 
		//   prompt them to start adding them.
		if (numLinks === 0) return (
			<React.Fragment>
				<LinkEntry 
					network='soundCloud'
					link=''
					onChange={ this.props.onChange }
				/>
				<LinkEntry 
					network='spotify'
					link=''
					onChange={ this.props.onChange }
				/>				
			</React.Fragment>
		);

		console.log('boop');

		// - Return number of links they have + number of new fields 
		//   they've popped down but haven't committed yet.
		return (
			<div className={ styles.externalLinks }>			
				{
					(externalLinks).map((linkEntry, i) => (
						<LinkEntry 
							network={ linkEntry.network }
							link={ linkEntry.link }
							onChange={ this.props.onChange }
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
			<div className={ styles.externalLinks }>
				{ this.renderLogic(this.props) }
			</div>
		);
	};
}


export default ExternalLinks;
