import React from 'react';
import { Mutation } from 'react-apollo';

import { TOGGLE_BACKDROP_MUTATION } from '../../GraphQL/Mutations';
import styles from './Backdrop.module.scss';

class Backdrop extends React.Component {
	// onClick = async (e, client) => {
	// 	const res = await client.mutation({
	// 		mutation: TOGGLE_BACKDROP_MUTATION
	// 	});
	// };

	render() {
		return (
			<Mutation mutation={ TOGGLE_BACKDROP_MUTATION }>
				{
					(toggleBackdrop) => (
						<div 
							className={ styles.backdrop }
							onClick={ toggleBackdrop }
						/>
					)
				}
			</Mutation>
		);
	}
};

export default Backdrop;
