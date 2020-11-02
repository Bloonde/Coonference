import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/pages/Login.scss';

import InputText from '../components/InputText';

class Login extends React.Component {
	render() {
		return (
			<div className="login">
				<InputText />
				<Link to="/"></Link>
			</div>
		);
	};
};

export default Login;
