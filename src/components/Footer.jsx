import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/components/Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="copy">
					<small>&copy; 2020 <Link to="#">Bloonde</Link></small>
					<small><Link to="#">Aviso legal</Link></small>
					<small><Link to="#">Política de privacidad</Link></small>
				</div>
			</footer>
		);
	};
};

export default Footer;
