import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HorizontalDivider from '../../Components/Dividers/HorizontalDivider/HorizontalDivider';
import FilledButton from '../../Components/Buttons/FilledButton/FilledButton';
import { ThemeContext } from '../../ThemeContext';

import styles from './ComponentPortal.module.scss';

class ComponentPortal extends React.Component {

	static propTypes = {
		shape: PropTypes.string
	};

	render() {
		const initObject = prepareComponent(this.props, this.context);

		return (
			<div className={ initObject.componentPortalClasses }>
				<div className={ initObject.titleBarClasses }>
					<h2>Component Portal</h2>
				</div>
				{
					(this.context === 'dark') &&
					<div
						style={{
							padding: '0px 30px',
							display: 'grid',
							alignItems: 'center'
						}}
					>
						<HorizontalDivider height='3px'/>
					</div>
				}		
				<div className={ styles.body }>
					<Link to='/login'>
						<FilledButton 
							text='Log In'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/register'>
						<FilledButton 
							text='Register'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/forgotpassword'>
						<FilledButton 
							text='Forgot Password'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/resetpassword'>
						<FilledButton 
							text='Reset Password'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/changepassword'>
						<FilledButton 
							text='Change Password'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/adduser'>
						<FilledButton 
							text='Add User'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/updateuser'>
						<FilledButton 
							text='Update User'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/addartproject'>
						<FilledButton 
							text='Add Art Project'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/updateartproject'>
						<FilledButton 
							text='Update Art Project'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/addsong'>
						<FilledButton 
							text='Add Song'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/updatesong'>
						<FilledButton 
							text='Update Song'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/addsonggroup'>
						<FilledButton 
							text='Add Song Group'  
							onClick={ () => {} }
						/>
					</Link>
					<Link to='/updatesonggroup'>
						<FilledButton 
							text='Update Song Group'  
							onClick={ () => {} }
						/>
					</Link>
				</div>		
			</div>
		);
	}
}

const prepareComponent = (props, context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const shapeClass = (props.shape === 'rounded') ? styles.rounded : null;

	const componentPortalClasses = ClassNames(styles.componentPortal, shapeClass, themeClass);
	const titleBarClasses = ClassNames(styles.titleBar, shapeClass, themeClass);

	return {
		componentPortalClasses,
		titleBarClasses
	}
}

ComponentPortal.contextType = ThemeContext;
export default ComponentPortal;
