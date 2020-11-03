import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

import '../assets/scss/components/Media.scss';

import Layout from '../components/Layout';
import Chat from '../components/Chat';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class Media extends React.Component {
	render() {
		return (
			<Layout>
					<Hero />
					<div className="video-container">
						<div className="media">
							<iframe
								src="https://www.youtube.com/embed/qm0IfG1GyZU"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
						<div className="video-description">
							<p className="overline"></p>
							<h2>Google Chrome Developers</h2>
							<p>
								In this dynamic talk, Una goes over the power of modern CSS layout techniques by highlighting a few key
								terms and how much detail can be described in a single line of code. Learn a few layout tricks you can
								implement in your codebase today, and be able to write entire swaths of layout with just a few lines of
								code.
							</p>
							<p>
								Resource: Check out the demo website: 1-Line Layouts →
								<Link to="https://goo.gle/2ViY1KE" target="_blank">https://goo.gle/2ViY1KE</Link>
							</p>
						</div>
					</div>
					<Footer />
				<Chat />
			</Layout>
		);
	};
};

export default Media;
