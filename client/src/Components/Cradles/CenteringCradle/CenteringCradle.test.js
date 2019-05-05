import React from 'react';
import ReactDOM from 'react-dom';
import CenteringCradle from './CenteringCradle';

describe('CenteringCradle', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CenteringCradle/>,div);
	});
});
