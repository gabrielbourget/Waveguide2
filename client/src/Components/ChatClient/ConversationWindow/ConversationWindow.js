import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';

import styles from './ConversationWindow.module.scss';

class ConversationWindow extends React.Component {
	render() {
		const initObject = prepareComponent(this.context);

		return (
			<div className={ initObject.conversationWindowClasses }>
				<TopBar/>
			</div>
		);
	}
}

const prepareComponent = (context) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const conversationWindowClasses = ClassNames(styles.conversationWindow, themeClass);

	return { conversationWindowClasses };
}

ConversationWindow.contextType = ThemeContext;

export default ConversationWindow;

