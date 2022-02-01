import React from "react";

import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {todosActions} from "../../state";
import css from "./TodoForm.module.css";

const TodoForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const {todos, completeCount} = useSelector(state => state['todosReducer']);

    const onSubmit = (data) => {
        dispatch(todosActions.createTodo({data}));
        reset();
    }

    return (
        <div>
            <div><h3>All: {todos.length} </h3> <h3>Completed: {completeCount}</h3></div>
            <form className={css.inputField} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        className={css.task_input}
                        type="text" {...register("todo")}
                        required
                        placeholder="Add todo..."
                    />
                </label>
                <label>
                    <input
                        className={css.btn_create}
                        type="submit"
                        value="Create"
                    />
                </label>
            </form>
            <hr/>
        </div>
    );
};

export {TodoForm};