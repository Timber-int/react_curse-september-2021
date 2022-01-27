import React from 'react';

import {TaskList} from "./components/TaskList/TaskList";
import {TaskListContextProvider} from "./context/TaskListContext";
import "./App.css";
import {TaskForm} from "./components/TaskForm/TaskForm";
import {Header} from "./components/Header/Header";

const App = () => {
    return (
        <TaskListContextProvider>
            <div className='container'>
                <div className='app-wrapper'>
                    <Header/>
                    <div className='main'>
                        <TaskForm/>
                        <TaskList/>
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export {App};
