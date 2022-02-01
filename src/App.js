import React from "react";

import {TodoForm, TodoList} from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <header><h1>TodoApp</h1></header>
                <div className="main">
                    <TodoForm/>
                    <TodoList/>
                </div>
            </div>
        </div>
    );
}

export default App;
