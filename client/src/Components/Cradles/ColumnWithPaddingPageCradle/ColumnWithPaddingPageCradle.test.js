import React from 'react';
import ReactDOM from 'react-dom';
import ColumnWithPaddingPageCradle from './ColumnWithPaddingPageCradle';

describe('ColumnWithPaddingPageCradle', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ColumnWithPaddingPageCradle/>,div);
	});
});
