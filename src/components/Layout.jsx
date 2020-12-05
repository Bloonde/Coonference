import React from 'react';

import Header from '../components/Header';

const Layout = (props) => {
	const children = props.children;
	return (
		<>
			<Header />
			<main className="main">
				{children}
			</main>
		</>
	);
};

export default Layout;
