import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { ThemeContext } from '../../ThemeContext';

import styles from './Nav.module.scss';
import { TOGGLE_SIDE_DRAWER_MUTATION } from '../../GraphQL/Mutations';
// import { TOGGLE_BACKDROP_MUTATION } from '../../GraphQL/Mutations';

import IconButton from '../Buttons/IconButton/IconButton';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

// - Hamburger Menu Icon
import { ReactComponent as HamburgerMenuDarkTheme } from './SVG/HamburgerMenu/HamburgerIconDarkTheme.svg';
import { ReactComponent as HamburgerMenuLightTheme } from './SVG/HamburgerMenu/HamburgerIconLightTheme.svg';
import { ReactComponent as HamburgerMenuHighlighted } from './SVG/HamburgerMenu/HamburgerIconHighlighted.svg';

// - Magnifying Glass Icon
import MagnifyingGlassHighlighted from './SVG/MagnifyingGlass/MagnifyingGlassHighlighted';
import MagnifyingGlassDarkTheme from './SVG/MagnifyingGlass/MagnifyingGlassDarkTheme';
import MagnifyingGlassLightTheme from './SVG/MagnifyingGlass/MagnifyingGlassLightTheme';

// - Home Icon
import HomeIconDarkTheme from './SVG/HomeIcon/HomeIconDarkTheme';
import HomeIconLightTheme from './SVG/HomeIcon/HomeIconLightTheme';
import HomeIconHighlighted from './SVG/HomeIcon/HomeIconHighlighted';

class Nav extends React.Component {
	state = {
		windowWidth: window.innerWidth
	};

	static propTypes = {
		//onSideMenuButtonClick: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired		
	};

	handleResize = () => this.setState( {windowWidth: window.innerWidth });

	componentDidMount = () => {
		this.setState( { windowWidth: window.innerWidth } );
		window.addEventListener('resize', this.handleResize);
	};

	componentWillUnmount = () => window.removeEventListener('resize', this.handleResize);

	render() {

		const initObject = prepareComponent(this.context, this.props, this.state);

		return (
			<div className={ initObject.navbarClasses }>
				<div className={ initObject.sideMenuButtonClasses }>
					<Mutation mutation={ TOGGLE_SIDE_DRAWER_MUTATION }>
						{
							(toggleSideDrawer) => (
								<IconButton 
									size='20px'
									darkTheme={ <HamburgerMenuDarkTheme/> }
									lightTheme={ <HamburgerMenuLightTheme/> }
									highlighted={ <HamburgerMenuHighlighted/> }
									onClick={ toggleSideDrawer }
								/>
							)
						}
					</Mutation>
				</div>

				<div className={ initObject.rightNavClasses }>
					<Link to='/search'>
						<IconButton
							size='20px'
							highlighted={ <MagnifyingGlassHighlighted/> }
							darkTheme={ <MagnifyingGlassDarkTheme/> }
							lightTheme={ <MagnifyingGlassLightTheme/> }
							onClick= { this.handleSearchButtonClick }
						/>
					</Link>

					<Link to='/'>
						<IconButton
							size='25px'
							darkTheme={ <HomeIconDarkTheme/> }
							lightTheme={ <HomeIconLightTheme/> }
							highlighted={ <HomeIconHighlighted/> }
							onClick={ () => {} } 
						/>
					</Link>

					<Link to='/login'>
						<OutlineButton 
							text='Log In'
							shape='rounded'
							onClick={() => {}}
						/>
					</Link>
				</div>
			</div>
		);
	}	
}

const prepareComponent = (context, props, state) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const activeClass = (state.active) ? styles.active : null;
	const navbarClasses = ClassNames(styles.navbar, themeClass, activeClass);
	const sideMenuButtonClasses = ClassNames(styles.sideMenuButton, themeClass);
	const rightNavClasses = ClassNames(styles.rightNav, themeClass);

	return {
		navbarClasses,
		sideMenuButtonClasses,
		rightNavClasses
	};
};

Nav.contextType = ThemeContext;
const NavWithRouter = withRouter(Nav);
export default NavWithRouter;
