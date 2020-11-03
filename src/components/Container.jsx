import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Home from '../pages/Home';
import Media from '../pages/Media';
import Contact from '../pages/Contact';
import Faqs from '../pages/Faqs';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Account from '../pages/Account';
import NotFound from '../pages/NotFound';

function Container({ location }) {
	return (
		<Switch location={location}>
			<Route exact path="/" component={Home} />
			<Route exact path="/conference" component={Media} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/faqs" component={Faqs} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/account" component={Account} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default withRouter(Container);
