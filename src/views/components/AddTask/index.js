import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAddTask } from '../../containers/redux/actions';
import { v4 } from 'uuid';
import Header from '../Header';
import '../../../App.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { FormControl, IconButton, ListItem, Input } from '@mui/material';

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
                <FormControl>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>

                <ListItem className='task-item-container'>
                    {state.tasks.map(task => <ListItem.Item key={task.id}>
                        <div className='task-item-container__list'>
                            {task.textInput}
                            <div>
                                <IconButton style={{ color: 'red' }}>
                                    <ClearIcon />
                                </IconButton>
                            </div>
                        </div>
                    </ListItem.Item>)}
                </ListItem>
            </div>
        </div>
    )
};

export default AddTask;