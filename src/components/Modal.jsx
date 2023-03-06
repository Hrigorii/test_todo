

export function Modal({ todo, modalActive, changeStatus, setModalActive }) {

	return (
		<div className={modalActive ? "modal active" : "modal"} onClick={(event) => {
			event.stopPropagation();
			setModalActive(false)
		}}>
			<div className="modal__body" onClick={(event) => event.stopPropagation()}>
				<div className="modal__title"><h2>{todo.title}</h2></div>
				<div className="modal__description">
					<h4>description:</h4>
					<p>{todo.description}</p>
				</div>
				<div className="modal__status">
					<label htmlFor="modalcb">Status:</label>
					<input id="modalcb" className="modal__cbx" type="checkbox" checked={todo.status} onChange={() => changeStatus()} />
				</div>
				<button className="modal__button" onClick={() => setModalActive(false)}>Cancel</button>
			</div>
		</div >
	)
}