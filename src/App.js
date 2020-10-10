import React, {useState} from 'react';
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css';
import Controller from "./Controller";

function getId() {
    return Math.random();
}

const taskArray = [
    {id: getId(), name: 'First Task', priority: 1, status: 'todo'},
    {id: getId(), name: 'Second Task', priority: 2, status: 'progress'},
    {id: getId(), name: 'Third Task', priority: 3, status: 'review'},
    {id: getId(), name: 'Fourth Task', priority: 4, status: 'done'},
    {id: getId(), name: 'Fifth Task', priority: 1, status: 'progress'},
    {id: getId(), name: 'Sixth Task', priority: 2, status: 'done'},
    {id: getId(), name: 'Seventh Task', priority: 3, status: 'review'},
];
const columnArray = [
    {id: getId(), title: 'To Do', status: 'todo'},
    {id: getId(), title: 'Progress', status: 'progress'},
    {id: getId(), title: 'Review', status: 'review'},
    {id: getId(), title: 'Done', status: 'done'},
];

const statuses = ['todo', 'progress', 'review', 'done'];
const priorities = [0, 1, 2, 3, 4, 5, 6];

function App() {
    const [tasks, setTasks] = useState(taskArray)

    const createTask = (newName, newStatus) => {
        const newTask = [...tasks, {id: getId(), name: newName, status: newStatus}];
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
                if (direction === 'up') el.priority = priorities[priorities.indexOf(el.priority) + 1];
                if (direction === 'down') el.priority = priorities[priorities.indexOf(el.priority) - 1];
            }
            return el
        })
        setTasks(newTasks);
    }

    const priorityChange = (id, val) => {
        const newTasks = tasks.map(el => {
            if (el.id === id) {
               el.priority = priorities[priorities.indexOf(el.priority) + val];
            }
            return el
        })
        setTasks(newTasks);
    }

    const editTask = (id, updatedTask) => {
        const newTasks = tasks.map(el => {
            if (el.id === id) {
            return {...el, ...updatedTask}
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
                                               priorityChange={priorityChange}
                                               priorities={priorities}
                                               editTask={editTask}
                />)}
            </div>
        </div>
    );
}

export default App;
