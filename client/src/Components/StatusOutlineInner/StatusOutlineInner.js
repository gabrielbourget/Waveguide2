import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { TransparentPane } from '../TransparentPane/TransparentPane';

import styles from './StatusOutlineInner.module.scss';

export const StatusOutlineInner = (props) => {
	
	const initObject = prepareComponent(props);

	console.log(initObject);

	// const renderTimeStyles = {
	// 	top: props.top,
	// 	left: props.left
	// };

	return (
		<TransparentPane>	
			<div className={ initObject.statusClasses }/>
		</TransparentPane>
	);
};

// StatusOutlineInner.propTypes = {
// 	top: PropTypes.string.isRequired,
// 	left: PropTypes.string.isRequired
// };

const prepareComponent = (props) => {
	
	let statusClass;
	switch (props.status) {
		case 'success': {
			statusClass = styles.success;
			break;
		}
		case 'problem': {
			statusClass = styles.problem;
			break;
		}
		default: break;
	}

	const statusClasses = ClassNames(styles.statusOutline, statusClass);

	return { statusClasses }
};
