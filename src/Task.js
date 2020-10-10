import React, {useState} from 'react';
import {Button} from "reactstrap";
import EditModel from "./EditModel";

function Task(props) {

    const{priorities} = props;

    const [editMode, setEditMode] = useState(false);

    const changeEditModel = () => {
        setEditMode(!editMode);
    }

    return (
        <div className='card'>
            <EditModel editMode={editMode} changeEditModel={changeEditModel} task={props.task} editTask={props.editTask}/>
            <div className="card-body">
                <h5 className="card-title">
                    {props.task.name} </h5>
                <h6>priority {props.task.priority}</h6>
                <p>{props.task.status}</p>
                <Button disabled={props.task.priority === priorities[priorities.length - 1]} color="warning" onClick={() => props.changeTaskStatus(props.task.id, 'up')}>↑</Button>
                <Button disabled={props.task.priority === priorities[0]}color="warning" onClick={() => props.changeTaskStatus(props.task.id, 'down')}>↓</Button>
                <a href="#" className="btn btn-primary"
                   onClick={() => props.changeTaskStatus(props.task.id, 'left')}>←</a>
                <a href="#" className="btn btn-primary"
                   onClick={() => props.changeTaskStatus(props.task.id, 'right')}>→</a>
                <Button onClick={() => props.delete(props.task.id)}>Delete</Button>
                <Button outline color="danger" onClick={() => setEditMode(true)}>Edit</Button>
            </div>
        </div>
    );
}

export default Task;