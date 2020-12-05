import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/pages/Login.scss';

class Login extends React.Component {
	render() {
		return (
			<>
			<h1>Login</h1>
			<Link to="/">Home</Link>
			</>
		);
	};
};

export default Login;
