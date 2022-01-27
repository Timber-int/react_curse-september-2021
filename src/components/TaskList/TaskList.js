import React, {useContext} from 'react';
import {TaskListContext} from "../../context/TaskListContext";
import {Task} from "../Task/Task";

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);

    return (
        <div>
            {
                tasks.length
                    ?
                    <ul className='list'>
                        {
                            tasks.map(task => <Task key={task.id + Date.now()} task={task}/>)
                        }
                    </ul>
                    :
                    (
                        <center><h1 className='no-tasks'>No tasks</h1></center>
                    )
            }

        </div>
    );
};

export {TaskList};