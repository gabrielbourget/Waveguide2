import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ArtistTable.module.scss';
import TableItem from './TableItem/TableItem';

class ArtistTable extends React.Component {
	state = {
		hasHeader: false,
		hasFooter: false 
	};

	render() {


		const initObject = prepareComponent(this.context, this.props, this.state);

		return (
			<table className={ initObject.artistTableClasses }>
				{
					this.state.hasHeader &&
					<thead className={ initObject.tableHeaderClasses }>
						{/* Put whatever header body stuff you want in here. */}
					</thead> 
				}
				<tbody className={ initObject.tableBodyClasses }>
					{
						this.props.artists.map((artist,index) => (
							<TableItem 
								key={ index } 
								name={ artist.name }
								src={ artist.imageURL }
								socialURLs={ artist.socialURLs }
							/> 
						))
					}
				</tbody>
				{
					this.state.hasFooter &&
					<tfoot className={ initObject.tableFooterClasses }>
						{/* Put whatever footer body stuff you want in here. */}
					</tfoot> 
				}
			</table>	
		);
	}
}

const prepareComponent = (context, props, state) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const artistTableClasses = ClassNames(styles.artistTable, themeClass);
	const tableHeaderClasses = ClassNames(styles.tableHeader, themeClass);
	const tableBodyClasses = ClassNames(styles.tableBody, themeClass);
	const tableFooterClasses = ClassNames(styles.tableFooter, themeClass);

	return {
		artistTableClasses,
		tableHeaderClasses,
		tableBodyClasses,
		tableFooterClasses
	};	
}





