import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import styles from './CommunityLinks.module.scss';

import OutlineButton from '../../Buttons/OutlineButton/OutlineButton';

class CommunityLinks extends React.Component {

	render() {
		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;

		return (
			<div className={ styles.communityLinks }>
				{
					this.props.communityLinks.map((item,index) => (
						<div className={ styles.linkItem } key={ index }>
							<div className={ styles.button }>
								<a
									href={ item.link }
									target='_blank'
									rel='noopener noreferrer'
								>
									<OutlineButton
										text={ item.buttonText }
										shape='rounded'
										onClick={ () => {} }
									/>
								</a>
							</div>
							<div className={ styles.label }>
								<h4 className={ themeClass }>{ item.description }</h4>
							</div>							
						</div>
					))
				}
			</div>
		);
	}
}

CommunityLinks.contextType = ThemeContext;
export default CommunityLinks;
