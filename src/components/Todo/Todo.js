import React from "react";

import {useDispatch} from "react-redux";
import {todosActions} from "../../state";
import "./Todo.css";

const Todo = ({todo}) => {
    const {id} = todo;

    const dispatch = useDispatch();

    return (
        <div>
            <div className="list-item">
                <center>
                    <input type="checkbox"
                           onChange={(e) => dispatch(todosActions.checkedTodo({
                               data: {
                                   id: id,
                                   status: e.target.checked
                               }
                           }))}
                           className="check_box"
                    />
                </center>

                <div className={todo.status === true ? "todoChecked" : "todoNotChecked"}>{todo.title}</div>
                <button className='btn-delete' onClick={() => dispatch(todosActions.deleteTodo({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {Todo};