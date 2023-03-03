import { useSelector } from "react-redux"
import { List } from "./List";


export function Lists() {

	console.log('render ListS');

	const todos = useSelector(state => state.todos.todos);

	return (
		<div className="list">
			<div className="list__head">
				<div className="list__id">ID</div>
				<div className="list__title">TITLE</div>
				<div className="list__description">DESCRIPTION</div>
				<div className="list__status">STATUS</div>
			</div>
			<ul className="list__items">
				{
					todos.map(todo => (
						<List key={todo.id} todo={todo} />
					))
				}
			</ul>
		</div>
	)

}