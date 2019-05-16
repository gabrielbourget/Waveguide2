import React from 'react';
import ClassNames from 'classnames';
import { Query } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import CenteringCradle from '../../Components/Cradles/CenteringCradle/CenteringCradle';
import LaggingLinesLoader from '../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';

import { ARTPROJECT_BY_ID_QUERY } from '../../GraphQL/Queries';
import styles from './SingleArtProject.module.scss';

class SingleArtProject extends React.Component {
	render() {
		const { id } = this.props;

		return (
			<Query 
				query={ ARTPROJECT_BY_ID_QUERY }
				variables={ { artProjectId: id } }
			>
				{
					({data, loading, error}) => {
						if (loading) {
							return (
								<CenteringCradle>
									<LaggingLinesLoader />
								</CenteringCradle>
							);
						}
						if (error) return <p>Error...</p>;

						const { ArtProject } = data;

						console.log(ArtProject);

						return (
							<React.Fragment>	
								<div>{ ArtProject[0].name }</div>
								<div>{ ArtProject[0].id }</div>
								<div>{ ArtProject[0].imageURL }</div>
							</React.Fragment>
						)
					}
				}
			</Query>
		);
	}
}

SingleArtProject.contextType = ThemeContext;
export default SingleArtProject;

