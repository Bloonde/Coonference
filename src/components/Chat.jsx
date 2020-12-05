import React from 'react';
import SimpleBar from 'simplebar-react';

import '../assets/scss/components/Chat.scss';

import ChatMessage from '../components/ChatMessage';
import ChatForm from '../components/ChatForm';

const messages = [];
for (let i = 0; i < 10; i++) {
	messages.push(
		<li className="message message-user">
			<div className="message-data">
				<span className="author">Valentine Bott</span>
				<span className="time">Hace 1 min.</span>
			</div>
			<div className="message-content">I've never been more ashamed in the lack of my CSS knowledge 😭</div>
		</li>
		);
	}
	
	class Chat extends React.Component {
		render() {
			return (
				<div className="sidebar">
					<div className="chat-container">
						<div className="btn-group message-selector" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-tab active">Todos</button>
							<button type="button" className="btn btn-tab">Ponentes</button>
							<button type="button" className="btn btn-tab">Usuarios</button>
						</div>
						<SimpleBar style={{ maxHeight: 'calc(100% - 200px)' }}>
							<ul className="conversation-list">
								<ChatMessage />
								{messages} 
							</ul>
						</SimpleBar>
						<ChatForm />
					</div>
				</div>
				);
			};
		};
		
		export default Chat;
		