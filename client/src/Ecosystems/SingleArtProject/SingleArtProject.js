import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import styles from './SingleArtProject.module.scss';

class SingleArtProject extends React.Component {
	render() {
		return (
			<div>boop</div>
		);
	}
}

SingleArtProject.contextType = ThemeContext;
export default SingleArtProject;

