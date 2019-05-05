import React from 'react';
import ReactDOM from 'react-dom';
import FromTheTopCradle from './FromTheTopCradle';

describe('FromTheTopCradle', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FromTheTopCradle/>,div);
	});
});
