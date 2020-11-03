import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/scss/main.scss';

import Container from './components/Container.jsx';

const App = () => (
	<Router>
		<Container />
	</Router>
);

render(<App />, document.getElementById('app'));
