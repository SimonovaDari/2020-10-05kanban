import React, {useState} from 'react';
import {Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function EditModel(props) {

    const [nameInput, setNameInput] = useState(props.task.name);
    const [statusInput, setStatusInput] = useState(props.task.status);

    const createButtonHandler = () => {
        props.editTask(props.task.id, {name: nameInput, status: statusInput});
      props.changeEditModel();
    }

    return (
        <div>
            <>
                <Modal isOpen={props.editMode}>
                    <ModalHeader>Edit Task</ModalHeader>
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
                        <Button color="primary" onClick={createButtonHandler}>Edit Task</Button>{' '}
                        <Button color="secondary" onClick={() => props.changeEditModel()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>

        </div>
    );
}

export default EditModel;