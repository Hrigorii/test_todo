import { List } from "./List";
import React from "react";

export const Lists =
	function ({ todos, setTodos }) {

		return (
			<div className="list">
				<div className="list__head">
					<div className="list__id">ID</div>
					<div className="list__title">TITLE</div>
					<div className="list__description">DESCRIPTION</div>
					<div className="list__status">STATUS</div>
				</div>
				<ul className="list__items" >
					{
						todos.map(todo => (
							<List key={todo.id} todo={todo} setTodos={setTodos} />
						))
					}
				</ul>
			</div>
		)
	}
