import React from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormInput = ({ email, password, changeEmail, changePassword, onClick, isHide, error }) => {
    return (
        <div>
            <OutlinedInput
                className='input-user'
                placeholder='Email'
                type='text'
                value={email}
                onChange={changeEmail}
            />
            {error ? <p className='error'>Username is correct</p> : null}
            <OutlinedInput
                placeholder='Password'
                className='input-user'
                type={isHide ? 'text' : 'password'}
                value={password}
                onChange={changePassword}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={onClick}
                        >
                            {isHide ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {error ? <p className='error'>Password is correct</p> : null}
        </div>
    )
}

export default FormInput;