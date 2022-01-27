import {createContext, useEffect, useState} from "react";

import {v4 as uuid} from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, {id: uuid(), title: title}]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearList = () => {
        setTasks([]);
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => task.id === id ? {title: title} : task);

        setTasks(newTasks);
    }

    return (
        <TaskListContext.Provider value={
            {
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editItem,
                editTask
            }
        }>
            {props.children}
        </TaskListContext.Provider>
    )
}
export {TaskListContextProvider};