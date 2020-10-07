import React, {useState} from 'react';
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css';
import Controller from "./Controller";

const taskArray = [
    {id: Math.random(), name: 'First Task', status: 'todo'},
    {id: Math.random(), name: 'Second Task', status: 'progress'},
    {id: Math.random(), name: 'Third Task', status: 'review'},
    {id: Math.random(), name: 'Fourth Task', status: 'done'},
    {id: Math.random(), name: 'Fifth Task', status: 'progress'},
    {id: Math.random(), name: 'Sixth Task', status: 'done'},
    {id: Math.random(), name: 'Seventh Task', status: 'review'},
];
const columnArray = [
    {id: Math.random(), title: 'To Do', status: 'todo'},
    {id: Math.random(), title: 'Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'},
];

const statuses = ['todo', 'progress', 'review', 'done'];

function App() {
    const [tasks, setTasks] = useState(taskArray)

    const createTask = (newName, newStatus) => {
        const newTask = [...tasks, {id: Math.random(), name: newName, status: newStatus}];
        setTasks(newTask)
    }

    const deleteTask = (taskId) => {
        const newList = tasks.filter(el => el.id !== taskId)
        setTasks(newList);
    }

    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
            }
            return el
        })
        setTasks(newTasks);
    }

    return (
        <div className='container'>
            <Controller createTask={createTask}/>
            <div className="row">
                {columnArray.map(el => <Column column={el}
                                               tasks={tasks}
                                               changeTaskStatus={changeTaskStatus}
                                               delete={deleteTask}
                />)}
            </div>
        </div>
    );
}

export default App;
