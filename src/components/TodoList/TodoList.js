import React from "react";

import {useSelector} from "react-redux";
import {Todo} from "../Todo/Todo";
import css from "./TodoList.module.css";

const TodoList = () => {

    const {todos} = useSelector(state => state['todosReducer']);

    return (
        <div className={css.list}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {TodoList};