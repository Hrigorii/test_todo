import React from "react";


export const Input = function ({ title, propref, error }) {

	return (
		<div className="input__item" >
			<label htmlFor="title" className="input__label">{title}</label>
			<input id="title" type="text" className="input__input"
				ref={propref}
				style={error ? { border: "1px solid red" } : {}}
				placeholder={`Enter ${title}`}
			/>
			{
				error ? <div className="error">This field is empty</div> : ''
			}
		</div >
	)
}
