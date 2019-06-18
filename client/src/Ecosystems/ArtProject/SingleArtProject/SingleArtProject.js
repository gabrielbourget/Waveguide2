import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Query } from 'react-apollo';
import { ThemeContext } from '../../../ThemeContext';

import CenteringCradle from '../../../Components/Cradles/CenteringCradle/CenteringCradle';
import LaggingLinesLoader from '../../../Components/Loaders/LaggingLinesLoader/LaggingLinesLoader';
import CoverImage from '../../../Components/ImageContainers/CoverImage/CoverImage';
import IconButton from '../../../Components/Buttons/IconButton/IconButton';

import { ARTPROJECT_BY_ID_QUERY } from '../../../GraphQL/ArtProject/Queries';

import Cradle from './Cradle/Cradle';
import SocialMediaIconComponents from '../../../Helpers/socialMediaIconComponents';
import { prepareLinkGallery } from './helpers';
import styles from './SingleArtProject.module.scss';

class SingleArtProject extends React.Component {

	static propTypes = {
		shape: PropTypes.string
	};

	static defaultProps = {
		shape: 'rounded'
	};

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
						const initObject = prepareComponent(this.context, this.props);
						const artistSocialLinks = prepareLinkGallery(ArtProject, SocialMediaIconComponents);

						return (
							<Cradle>
								<div className={ initObject.containerClasses }>
									<div className={ styles.one }>
										<CoverImage src={ ArtProject[0].imageURL } title={ ArtProject[0].name }/>
										<div className={ styles.right }>
											<h1>{ ArtProject[0].name }</h1>
											<h3>Art Project</h3>
										</div>
									</div>
									<div className={ styles.two }>
										<h3>LINKS</h3>
										<div className={ styles.linkListContainer }>
				  						{
												artistSocialLinks.map((LinkInfo,index) => (
													<a 
														key={ index }
														href={ LinkInfo.link } 
														target='_blank'
														rel='noopener noreferrer' 
													>											
														<IconButton
															key={ index }
															size='50px'
															darkTheme={ React.createElement(LinkInfo.icons['darkTheme']) }
															highlighted={ React.createElement(LinkInfo.icons['highlighted']) }
															lightTheme={ React.createElement(LinkInfo.icons['lightTheme']) }
															onClick={ () => {} }
														/>
													</a>													
												))
											}											
										</div>
									</div>
								</div>
							</Cradle>
						);
					}
				}
			</Query>
		);
	}
}

const prepareComponent = (context, props) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (props.shape === 'rounded') ? styles.rounded : null;
	const containerClasses = ClassNames(styles.container, themeClass, shapeClass);

	return { containerClasses };
}

SingleArtProject.contextType = ThemeContext;
export default SingleArtProject;

