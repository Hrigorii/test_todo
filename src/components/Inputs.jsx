import { Input } from "./Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./store/todoSlice";


export function Inputs() {

	console.log('render inputs');

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);

	const dispatch = useDispatch();

	function newTodo() {
		if (title.trim().length === 0) setTitleError(true)
		if (description.trim().length === 0) setDescriptionError(true)
		else if (!titleError && !descriptionError) {
			dispatch(addToDo({ title, description }));
			setTitle('');
			setDescription('');
		}
	}


	return (
		<div className="input">
			<Input title="Title" error={titleError} setError={setTitleError}
				value={title} setValue={setTitle}
			/>
			<Input title="Description" error={descriptionError} setError={setDescriptionError}
				value={description} setValue={setDescription}
			/>
			<button className="input__button" onClick={newTodo}>Create</button>
		</div>

	)
}