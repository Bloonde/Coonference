import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/pages/Login.scss';

import InputText from '../components/InputText';

class Register extends React.Component {
	render() {
		return (
			<div className="login">
				<InputText />
				<Link to="/"></Link>
			</div>
		);
	};
};

export default Register;
