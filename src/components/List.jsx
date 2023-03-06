import { Modal } from "./Modal";
import { useState, useCallback } from "react";
import React from "react";

export const List = React.memo(function ({ todo, setTodos }) {

	const [modalActive, setModalActive] = useState(false);

	const changeStatus = useCallback(function () {
		setTodos(prev => {
			const newTodos = prev.map(item => {
				if (item.id === todo.id) {
					return {
						...item,
						status: !todo.status,
					}
				}
				return item;
			});
			return [...newTodos]
		})
	}, [todo, setTodos])

	return (
		<li className="list__item" onClick={() => setModalActive(true)}>
			<div className="list__id">{todo.id}.</div>
			<div className="list__title">{todo.title}</div>
			<div className="list__description">{todo.description}</div>
			<div className="list__status">
				<input type="checkbox" checked={todo.status} onChange={() => {
					changeStatus();
				}}
					onClick={event => event.stopPropagation()} />
			</div>
			<Modal todo={todo} changeStatus={changeStatus} modalActive={modalActive} setModalActive={setModalActive} />
		</li>
	)
})