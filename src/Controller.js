import React, {useState} from 'react';
import {Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Controller(props) {
    const [isCreateMode, setIsCreateMode] = useState(false)
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const createButtonHandler = () => {
        props.createTask(nameInput, statusInput);
        setIsCreateMode(false);
        setNameInput('');
        setStatusInput('');
    }

    return (
        <div>
            <button onClick={() => setIsCreateMode(true)}>Create</button>
            {isCreateMode &&
            <>
                <Modal isOpen={isCreateMode}>
                    <ModalHeader>Create new Task</ModalHeader>
                    <ModalBody>
                        <Label>Name:</Label>
                        <Input type="text" placeholder="type name here" value={nameInput}
                               onChange={event => setNameInput(event.target.value)}/>
                        <Label>Status:</Label>
                        <Input type="select" value={statusInput} onChange={event => setStatusInput(event.target.value)}>
                            <option value='todo'>To do</option>
                            <option value='progress'>In progress</option>
                            <option value='review'>In review</option>
                            <option value='done'>Done</option>
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={createButtonHandler}>Create New Task</Button>{' '}
                        <Button color="secondary" onClick={() => setIsCreateMode(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
            }
        </div>
    );
}

export default Controller;