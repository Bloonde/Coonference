import React from 'react';

import '../assets/scss/components/MediaItem.scss';

class MediaItem extends React.Component {
	render() {
		return(
			<li className="media-item">
				<div className="media-item-content">
					<img
						className="media-poster"
						src={this.props.mediaposter}
						alt={this.props.mediatitle}
						/>
					<h1 className="media-title">{this.props.mediatitle}</h1>
					<p className="media-category">{this.props.mediacategory}</p>
				</div>
				<div className="media-item-footer">
					<Link className="btn" to="/conferencia">Ver conferencia</Link>
				</div>
			</li>
		);
	};
};

export default MediaItem;
