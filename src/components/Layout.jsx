import React from 'react';

import Navbar from '../components/Navbar';

const Layout = (props) => {
	const children = props.children;
	return (
		<>
		<Navbar />
		{children}
		</>
	);
};

export default Layout;
