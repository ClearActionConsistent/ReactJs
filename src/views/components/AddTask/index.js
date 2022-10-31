import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAddTask } from '../../containers/redux/actions';
import { v4 } from 'uuid';
import Header from '../Header';
import '../../../App.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const AddTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(state => state.taskReducer);
    const [textInput, setTextInput] = useState('');

    const onChangeText = (event) => {
        const value = event.target.value;
        setTextInput(value);
    }

    const onClickAddTask = (e) => {
        e.preventDefault();
        dispatch(onAddTask(v4(), textInput, false));
        setTextInput('');
    }

    return (
        <div>
            <Header title='Close' className='btn-closed' onClick={() => navigate('/')} />
            <div className='add-task'>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Task</Form.Label>
                        <Form.Control type='text' placeholder='Add Task'
                            onChange={onChangeText} value={textInput} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Day & Time</Form.Label>
                        <Form.Control type='date' placeholder='Add Day & Time' />
                    </Form.Group>
                    <Form.Group className='check-box'>
                        <Form.Label>Set Reminder</Form.Label>
                        <Form.Check type='checkbox' />
                    </Form.Group>
                    <Button className='btn-save' variant='dark' onClick={onClickAddTask} disabled={!textInput} >
                        Save Task
                    </Button>
                </Form>

                <ListGroup className='task-item-container'>
                    {state.tasks.map(task => <ListGroup.Item key={task.id}>
                        <div className='task-item-container__list'>
                            {task.textInput}
                            <div>
                                <IconButton style={{ color: 'red' }}>
                                    <ClearIcon />
                                </IconButton>
                            </div>
                        </div>
                    </ListGroup.Item>)}
                </ListGroup>
            </div>
        </div>
    )
};

export default AddTask;