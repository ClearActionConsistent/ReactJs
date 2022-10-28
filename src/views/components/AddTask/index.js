import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './styles.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../../App.scss';

const AddTask = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header title="Close" className="btn-close" onClick={() => navigate('/home')} />
            <div className='add-task'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="email" placeholder="Add Task" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Day & Time</Form.Label>
                        <Form.Control type="" placeholder="Add Day & Time" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save a Task
                    </Button>
                </Form>
            </div>
        </div>
    )
};

export default AddTask;