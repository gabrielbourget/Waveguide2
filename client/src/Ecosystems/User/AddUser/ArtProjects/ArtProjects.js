import React from 'react';

import SmallArtProjectCard from '../../../../Components/Cards/SmallArtProjectCard/SmallArtProjectCard';

import styles from './ArtProjects.module.scss';

// - Temp test data 
import { artProjects } from '../../../../Datasets/artProjects';

class ArtProjects extends React.Component {

	renderLogic = (props) => {
		// const { artProjects } = props;

		// if (artProjects.length === 0) {
		// 	return (<p>Add button to create art project</p>);
		// }

		return (
			<div className={ styles.artProjects }>
				<SmallArtProjectCard 
					artProject={ artProjects[3] }
					shape='rounded'
				/>
			</div>			
		);
	}

	render() {
		//const props = { ...this.props }
		return this.renderLogic(this.props) ;
	}
}

export default ArtProjects;


{/*			<div className={ styles.artProjects }>
				{
					artProjects.map((artProject) => (
						<SmallArtProjectCard 
							artProject={ artProjects[0] }
							shape='rounded'
							key={ artProject.id }
						/>
					))
				}
			</div>
*/}
