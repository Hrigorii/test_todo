


export function Input({ title, value, setValue, error, setError }) {

	function input(event) {
		if (error) setError(false);
		setValue(event.target.value);
	}

	return (
		<div className="input__item" >
			<label htmlFor="title" className="input__label">{title}</label>
			<input id="title" type="text" className="input__input"
				value={value} onInput={(event) => input(event)}
				style={error ? { border: "1px solid red" } : {}}
				placeholder={`Enter ${title}`}
			/>
			{
				error ? <div className="error">This field is empty</div> : ''
			}
		</div >
	)
}