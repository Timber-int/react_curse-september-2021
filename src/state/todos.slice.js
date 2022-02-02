import {createSlice} from "@reduxjs/toolkit";

import {v4 as uuid} from "uuid";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        todos: [],
        completeCount: 0,
    },
    reducers: {
        createTodo: (state, action) => {
            const {todo} = action.payload.data;
            state.todos.push({id: uuid(), title: todo, status: false});
        },
        deleteTodo: (state, action) => {
            const id = action.payload.id;
            state.todos = state.todos.filter(todo => todo.id !== id);

            if (state.todos.length === 0) {
                state.completeCount = 0;
            }
        },
        checkedTodo: (state, action) => {
            const {id, status} = action.payload.data;
            state.todos = state.todos.map(todo => todo.id === id ? {...todo, status: status} : todo);

            if (status === true) {
                state.completeCount = state.completeCount + 1;
            } else if (status === false) {
                state.completeCount = state.completeCount === 0 ? 0 : state.completeCount - 1;
            }
        }
    }
});

const todosReducer = todosSlice.reducer;

const {createTodo, deleteTodo, checkedTodo} = todosSlice.actions;

export const todosActions = {createTodo, deleteTodo, checkedTodo};

export default todosReducer;
