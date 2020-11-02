import React from 'react';

import '../assets/scss/components/Hero.scss';

const Hero = (props) => {
	return (
		<section className="hero">
			<div className="banner">
				<div className="banner-heading">
					<p className="overline">#webdevLIVE</p>
					<h1 className="banner-title">Una Kravets: Single-Line Layouts</h1>
				</div>
				<div className="stats">
					<div className="stat" title="Espectadores">
						<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
							<path
								d="M15,6 C16.66,6 17.99,4.66 17.99,3 C17.99,1.34 16.66,0 15,0 C13.34,0 12,1.34 12,3 C12,4.66 13.34,6 15,6 Z M7,6 C8.66,6 9.99,4.66 9.99,3 C9.99,1.34 8.66,0 7,0 C5.34,0 4,1.34 4,3 C4,4.66 5.34,6 7,6 Z M7,8 C4.67,8 0,9.17 0,11.5 L0,14 L14,14 L14,11.5 C14,9.17 9.33,8 7,8 Z M15,8 C14.71,8 14.38,8.02 14.03,8.05 C15.19,8.89 16,10.02 16,11.5 L16,14 L22,14 L22,11.5 C22,9.17 17.33,8 15,8 Z"
							/>
						</svg>
						<span className="tag">132</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
