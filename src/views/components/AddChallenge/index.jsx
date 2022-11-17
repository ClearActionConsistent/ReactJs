
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

import './style.css'
import Header from './../Header/index';

const styleItem = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const AddChallenge = () => {
    const [value, setValue] = useState({
        calories: '',
        splatPoints: '',
        avg: '',
        max: '',
        miles: '',
        steps: '',
    });

    const handleAddChallenge = (event) => {
        event.preventDefault();
        alert('Your metric' + '\n' + JSON.stringify(value));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue((prev) => ({
            ...prev,
            [name]: value.replace(/\D/g, '')
        }))
    }

    return (
        <>
            <div className='challenge_body'>
                <div className='challenge_container'>
                    <Box sx={{ width: '50%', padding: "10px" }}>
                        <form onSubmit={handleAddChallenge}>
                            <Grid container spacing={2} >
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.calories} fullWidth label='Calories' variant='outlined' name='calories' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.splatPoints} fullWidth label='Splat Points' variant='outlined' name='splatPoints' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.avg} fullWidth label='AVG.HR' variant='outlined' name='avg' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.max} fullWidth label='MAX HR' variant='outlined' name='max' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.miles} fullWidth label='Miles' variant='outlined' name='miles' />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required placeholder='Please input number' onChange={(e) => handleChange(e)} value={value.steps} fullWidth label='Steps' variant='outlined' name='steps' />
                                </Grid>
                                <Grid sx={styleItem} item xs={12}>
                                    <Button type='submit' variant='outlined'> Add</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default AddChallenge