import React from 'react';

import '../assets/scss/components/ChatMessage.scss';

class ChatMessage extends React.Component {
	render() {
		return (
			<li className="message message-admin">
				<div className="message-data">
					<span className="author">Una Kravets</span>
					<span className="time">Hace 1 min.</span>
				</div>
				<div className="message-content">👋 Hey folks! Are you ready?</div>
				<div className="message-content">
					Remember you have all the links related in the description box below the video.
				</div>
				<div className="message-content">Let's get started! 🏁</div>
			</li>
		);
	};
};

export default ChatMessage;
