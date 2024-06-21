import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: JSON.parse(localStorage.getItem('todos')) || [],
	completed: [],
	filter: 'all',
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addItem(state, action) {
			const exist = state.todos.find(
				(todo) => todo.todo === action.payload.todo
			);

			if (exist || action.payload.todo === '') return;
			const newTodo = {
				todo: action.payload.todo,
				id: new Date().getTime(),
			};
			state.todos.push(newTodo);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		deleteItem(state, action) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			state.completed = state.completed.filter((id) => id !== action.payload);

			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		done(state, action) {
			state.completed = [...state.completed, action.payload];
		},
		undo(state, action) {
			state.completed = state.completed.filter((id) => id !== action.payload);
		},
		addFilter(state, action) {
			state.filter = action.payload;
		},
		clear(state) {
			state.todos = [];
		},
	},
});

export const { addItem, deleteItem, clear, done, undo, addFilter } =
	todoSlice.actions;

const store = configureStore({
	reducer: todoSlice.reducer,
});

export default store;
