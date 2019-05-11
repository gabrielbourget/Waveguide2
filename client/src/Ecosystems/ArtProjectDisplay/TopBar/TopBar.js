import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../../ThemeContext';

// - Sort Icon
import { ReactComponent as SortIconDarkTheme } from './SVG/SortIcon/SortIconDarkTheme.svg';
import { ReactComponent as SortIconLightTheme } from './SVG/SortIcon/SortIconLightTheme.svg';
import { ReactComponent as SortIconHighlighted } from './SVG/SortIcon/SortIconHighlighted.svg';
// - Ascending Alphapbetical Sort
import { ReactComponent as AscAlphaIconDarkTheme } from './SVG/AscAlphaIcon/AscAlphaIconDarkTheme.svg';
import { ReactComponent as AscAlphaIconLightTheme } from './SVG/AscAlphaIcon/AscAlphaIconLightTheme.svg';
import { ReactComponent as AscAlphaIconHighlighted } from './SVG/AscAlphaIcon/AscAlphaIconHighlighted.svg';
// - Descending Alphabetical Sort
import { ReactComponent as DescAlphaIconDarkTheme } from './SVG/DescAlphaIcon/DescAlphaIconDarkTheme.svg';
import { ReactComponent as DescAlphaIconLightTheme } from './SVG/DescAlphaIcon/DescAlphaIconLightTheme.svg';
import { ReactComponent as DescAlphaIconHighlighted } from './SVG/DescAlphaIcon/DescAlphaIconHighlighted.svg';
// - List View 
import ListViewIconDarkTheme from './SVG/ListViewIcon/ListViewIconDarkTheme';
import ListViewIconLightTheme from './SVG/ListViewIcon/ListViewIconLightTheme';
import ListViewIconHighlighted from './SVG/ListViewIcon/ListViewIconHighlighted';
// - Grid View
import { ReactComponent as GalleryViewIconDarkTheme } from './SVG/GalleryViewIcon/GalleryViewIconDarkTheme.svg';
import { ReactComponent as GalleryViewIconLightTheme } from './SVG/GalleryViewIcon/GalleryViewIconLightTheme.svg';
import { ReactComponent as GalleryViewIconHighlighted } from './SVG/GalleryViewIcon/GalleryViewIconHighlighted.svg';

import styles from './TopBar.module.scss';
import { sortCriteriaEnum } from '../../../Helpers/generalDataStructures';
import IconButton from '../../../Components/Buttons/IconButton/IconButton';
import HorizontalDivider from '../../../Components/Dividers/HorizontalDivider/HorizontalDivider';

class TopBar extends React.Component {
	state = {
		sortMenuOpen: false
	};

	handleSortMenuClick = () => {
		const prevState = this.state;
		this.setState((prevState) => ({ sortMenuOpen: !prevState.sortMenuOpen }));
	};

	render() {
		const initObject = prepareComponent(this.context, this.props, this.state);

		return (
			<div className={ initObject.topBarClasses }>
				<div className={ styles.top }>
					
					<div className={ styles.left }>
						<h3>Artists</h3>
					</div>
					
					<div className={ styles.right }>
						{/* Sort Menu conditionally reveals itself */}
						{
							this.state.sortMenuOpen ?
							<React.Fragment>
								<IconButton
									size='25px'
									darkTheme={ <AscAlphaIconDarkTheme/> }
									lightTheme={ <AscAlphaIconLightTheme/> }
									highlighted={ <AscAlphaIconHighlighted/> }
									onClick={ () => this.props.onSortClick(sortCriteriaEnum.ALPHABETICAL) }
								/>
								<IconButton
									size='25px'
									darkTheme={ <DescAlphaIconDarkTheme/> }
									lightTheme={ <DescAlphaIconLightTheme/> }
									highlighted={ <DescAlphaIconHighlighted/> }
									onClick={ () => this.props.onSortClick(sortCriteriaEnum.ALPHABETICAL) }
								/>
							</React.Fragment>	:
							null
						}				
						{/* Sort Menu Button */}
						<IconButton
							size='25px'
							darkTheme={ <SortIconDarkTheme/> }
							lightTheme={ <SortIconLightTheme/> }
							highLighted={ <SortIconHighlighted/> }
							onClick={ this.handleSortMenuClick }
						/>
						{/* List Display Button */}
						<IconButton
							size='25px'
							darkTheme={ <ListViewIconDarkTheme/> }
							lightTheme={ <ListViewIconLightTheme/> }
							highlighted={ <ListViewIconHighlighted/> }
							onClick={ () => this.props.onSwitchViewModeClick('table') }
						/>
						{/* Gallery Display Button */}
						<IconButton 
							size='25px'
							darkTheme={ <GalleryViewIconDarkTheme/> }
							lightTheme={ <GalleryViewIconLightTheme/> }
							highlighted={ <GalleryViewIconHighlighted/> }
							onClick={ () => this.props.onSwitchViewModeClick('gallery') }
						/>
					</div> 
				</div> 
				<HorizontalDivider />
			</div> 
		);
	}
} 

const prepareComponent = (context, props, state) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const topBarClasses = ClassNames(styles.topBar, themeClass);

	return { topBarClasses };
};

TopBar.contextType = ThemeContext;
export default TopBar;
