import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		error: {
			title: false,
			description: false,
		},
	},
	reducers: {
		addToDo(state, action) {
			function getId() {
				const newId = Math.ceil(Math.random() * 100)
				if (state.todos.find(todo => todo.id === newId)) getId()
				else return newId;
			}
			const newToDo = {
				id: getId(),
				title: action.payload.title,
				description: action.payload.description,
				status: false,
			}
			state.todos.push(newToDo);
		},
		toggleTodoComp(state, action) {
			const changedStatus = state.todos.find(todo => todo.id === action.payload);
			changedStatus.status = !changedStatus.status;
		},
	}
})

export const { addToDo, toggleTodoComp } = todoSlice.actions;

export default todoSlice.reducer;