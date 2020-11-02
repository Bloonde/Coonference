import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/components/MediaList.scss';

class MediaList extends React.Component {
	render() {
		return(
			<div className="media-row">
				<ul className="media-list">
					{this.props.items.map(item => {
						return(
							<li className="media-item" key={item.id}>
								<div className="media-item-content">
									<img
										className="media-poster"
										src={item.mediaposter}
										alt={item.mediatitle}
										/>
									<h1 className="media-title">{item.mediatitle}</h1>
									<p className="media-category">{item.mediacategory}</p>
								</div>
								<div className="media-item-footer">
									<Link className="btn btn-bordered-primary " to="/conference">Ver conferencia</Link>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		);
	};
};

export default MediaList;
