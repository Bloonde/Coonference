import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/components/Navbar.scss';
import logoSm from '../assets/img/logo-sm.svg';
import logoMd from '../assets/img/logo-md.svg';
import logoLg from '../assets/img/logo-lg.svg';
import Account from '../assets/img/Account.svg';

class Navbar extends React.Component {
	render() {
		return (
			<header className="header-main" id="header">
				<Link className="navbar-brand" to="/">
					<picture className="logo">
						<source media="(max-width: 480px)" srcSet={logoSm} />
						<source media="(max-width: 768px)" srcSet={logoMd} />
						<source media="(min-width: 769px)" srcSet={logoLg} />
						<img src={logoLg} alt="Company" />
					</picture>
				</Link>
				<ul className="navbar">
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Contacto</a></li>
					<li><a href="#">FAQs</a></li>
					<li>
						<a href="#">
							<img className="icon" src={Account} />
						</a>
					</li>
				</ul>
			</header>
		);
	};
};

export default Navbar;
