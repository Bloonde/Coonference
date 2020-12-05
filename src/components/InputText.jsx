import React from "react";

const TextInput = props => {
	return (
		<div className="form-group">
			<label className="sr-only" htmlFor={props.id}>{label}</label>
			<input
			className="form-control"
				type="text"
				value={props.value}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				onChange={event => console.log("value changed!")}
			/>
		</div>
	);
};

export default TextInput;