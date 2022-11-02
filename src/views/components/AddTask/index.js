import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { FormControl, Input } from '@mui/material';

const AddTask = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header title='Close' className='btn-closed' onClick={() => navigate('/')} />
            <div className='add-task'>
                <FormControl>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
            </div>
        </div>
    )
};

export default AddTask;