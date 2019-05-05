import React from 'react';
import ReactDOM from 'react-dom';
import ToTheLeftCradle from './ToTheLeftCradle';

describe('ToTheLeftCradle', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ToTheLeftCradle/>,div);
	});
});
