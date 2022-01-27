import React, {useContext, useEffect, useState} from 'react';
import {TaskListContext} from "../../context/TaskListContext";

const TaskForm = () => {
    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext);

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text"
                className='task-input'
                placeholder="Add Task..."
                required
                onChange={handleChange}
                value={title}

            />

            <div className='buttons'>
                <button type="submit" className='btn add-task-btn'>
                    {editItem ? 'Edit task' : 'Add task'}
                </button>

                <button onClick={clearList} className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>
    );
};

export {TaskForm};