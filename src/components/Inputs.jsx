import { Input } from "./Input";
import React, { useRef, useState, useCallback } from "react";

export const Inputs = React.memo(function ({ setTodos }) {

	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const titleRef = useRef();
	const descRef = useRef();

	const newTodo = useCallback(function (event) {
		event.preventDefault();
		if (titleRef.current.value.length === 0) {
			setTitleError(true);
		}
		if (descRef.current.value.length === 0) {
			setDescriptionError(true);
		} else if (titleRef.current.value.length > 0 && descRef.current.value.length > 0) {

			setTodos(prev => {
				function getId() {
					const newId = Math.ceil(Math.random() * 100)
					if (prev.find(todo => todo.id === newId)) getId()
					else return newId;
				}

				return [...prev, {
					id: getId(),
					title: titleRef.current.value,
					description: descRef.current.value,
					status: false,
				}]
			})
			// titleRef.current.value = '';
			// descRef.current.value = '';
			setTitleError(false);
			setDescriptionError(false);
		}
	}, [setTodos])


	return (
		<div className="input">
			<Input title="Title" error={titleError} setError={setTitleError}
				propref={titleRef}
			/>
			<Input title="Description" error={descriptionError} setError={setDescriptionError}
				propref={descRef}
			/>
			<button type="submit" className="input__button" onClick={event => newTodo(event)}>Create</button>
		</div>

	)
})