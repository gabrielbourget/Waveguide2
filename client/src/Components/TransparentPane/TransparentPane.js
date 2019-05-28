import React from 'react';

import styles from './TransparentPane.module.scss';

export const TransparentPane = (props) => {
	return (
			<div className={ styles.transparentPane }>
				{ props.children }
			</div>
	);
};



