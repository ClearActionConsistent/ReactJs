import React from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './styles.css';

const FormInput = ({ email, password, changeEmail, changePassword, onClick, isHide, error, isRegister }) => {
    return (
        <div>
            <OutlinedInput
                required
                className='input-user'
                placeholder='Email'
                type='text'
                value={email}
                onChange={changeEmail}
            />
            {error ? <p className='error'>Username is correct</p> : null}
            <OutlinedInput
                required
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
            {isRegister && <p className='register'>Passwords must contain at least 8 charaters.</p>}
        </div>
    )
}

export default FormInput;