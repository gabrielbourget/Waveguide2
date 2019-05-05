import React from 'react';
import ReactDOM from 'react-dom';
import MiddleContentCradle from './MiddleContentCradle';

describe('MiddleContentCradle', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MiddleContentCradle/>,div);
	});
});
