import { useDispatch } from "react-redux";
import { Modal } from "./Modal";
import { toggleTodoComp } from "./store/todoSlice";
import { useState } from "react";

export function List({ todo }) {

	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false)

	return (
		<li className="list__item" onClick={() => setModalActive(true)}>
			<div className="list__id">{todo.id}.</div>
			<div className="list__title">{todo.title}</div>
			<div className="list__description">{todo.description}</div>
			<div className="list__status">
				<input type="checkbox" checked={todo.status} onChange={() => dispatch(toggleTodoComp(todo.id))}
					onClick={event => event.stopPropagation()} />
			</div>
			<Modal todo={todo} modalActive={modalActive} setModalActive={setModalActive} />
		</li>
	)
}