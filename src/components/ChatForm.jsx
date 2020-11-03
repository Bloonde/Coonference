import React from 'react';

import '../assets/scss/components/ChatForm.scss';

import ArrowRight from '../assets/img/ArrowRight.svg';

class ChatForm extends React.Component {
	render() {
		return (
			<form className="message-box">
				<div className="form-group">
					<label className="sr-only" htmlFor="message">Envía tu pregunta o comentario al ponente</label>
					<textarea
						className="form-control"
						name="message"
						id="message"
						placeholder="Envía tu pregunta o comentario al ponente"
					></textarea>
				</div>
				<div className="form-actions">
					<small className="message-counter text-muted">0/250</small>
					<button className="btn btn-icon" type="submit">
						<img className="icon" src={ArrowRight} />
					</button>
				</div>
			</form>
		);
	};
};

export default ChatForm;
