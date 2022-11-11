import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    increaseNumber,
    decreaseNumber,
    updateHistory,
    getPostsThunk,
} from '../../../slices/countSlice';

import './styles.css';
import { unwrapResult } from '@reduxjs/toolkit';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);

        this.state = {
            Auth: {
                username: '',
                email: '',
            },
            IsRegister: false,
            values: {
                amount: '',
                password: '',
                weight: '',
                weightRange: '',
                showPassword: false,
            }
        };
    }

    handleSignup() {
        if (
            this.state.Auth.email === 'test@gmail.com' &&
            this.state.Auth.username === 'test'
        ) {
            this.setState((prevState) => ({
                IsRegister: {
                    ...prevState.IsRegister,
                    IsRegister: true,
                },
            }));
        } else {
            alert('Sign up fail');
        }
    }

    render() {
        const {
            increaseNumber,
            decreaseNumber,
            getPostsThunkAPI,
        } = this.props;

        // const handleCallAxios = async () => {
        //   const response = await stravaApi.getPosts();
        //   const response1 = await stravaApi.postPosts();
        //   const response2 = await stravaApi.getbyPosts(1);
        // };


        // const handleIncreaseNumber = async () => {
        //     increaseNumber();
        //     await getPostsThunkAPI(1);
        // };

        // const handleDecreaseNumber = () => {
        //     decreaseNumber();
        // };

        return (
            <div className='sign-up-form'>
                {this.state.IsRegister && <Navigate to='/home' replace={true} />}
                <Box
                    component='form'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '20%',
                    }}
                    noValidate
                    autoComplete='off'
                >
                    <Typography sx={{ fontWeight: 'bold' }} variant='h4' gutterBottom>
                        Sign up with email
                    </Typography>
                    <TextField
                        InputLabelProps={{
                            style: { color: '#000000', fontWeight: 'bold' },
                        }}
                        margin='normal'
                        label='Username'
                        variant='standard'
                        onChange={(e) => {
                            this.setState((prevState) => ({
                                Auth: {
                                    ...prevState.Auth,
                                    username: e.target.value,
                                },
                            }));
                        }}
                    />
                    <TextField
                        InputLabelProps={{
                            style: { color: '#000000', fontWeight: 'bold' },
                        }}
                        fullWidth
                        label='Password'
                        variant='standard'
                        helperText='Passwords must contain at leat 8 characters'
                        style={{ marginBottom: '20px' }}
                        onChange={(e) => {
                            this.setState((prevState) => ({
                                Auth: {
                                    ...prevState.Auth,
                                    email: e.target.value,
                                },
                            }));
                        }}
                        type={this.state.values.showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    {this.state.values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />


                    <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Typography
                        sx={{ fontWeight: 'light' }}
                        variant='caption'
                        gutterBottom
                        margin='normal'
                    >
                        By siging up you are agreeing to our{' '}
                        <a className='link' href='https://www.izibds.com/'>
                            Ters of Service.
                        </a>
                    </Typography>
                    <Typography
                        margin='normal'
                        sx={{ fontWeight: 'light' }}
                        variant='caption'
                        gutterBottom
                        style={{ marginBottom: '20px' }}
                    >
                        View our{' '}
                        <a className='link' href='https://www.izibds.com/'>
                            Privacy Policy.
                        </a>
                    </Typography>
                    <button
                        type='button'
                        onClick={() => this.handleSignup()}
                        className='btn-signup'
                    >
                        Agree and Sign Up
                    </button>

                    {/* <button
                        type='button'
                        onClick={() => handleIncreaseNumber()}
                        className='btn-layout bg-fb'
                    >
                        <span className='icon'>
                            <i className='fab fa-facebook'></i>
                        </span>
                        <span className=''>Continue with Facebook</span>
                    </button>

                    <button
                        type='button'
                        onClick={() => handleDecreaseNumber()}
                        className='btn-layout bg-gg'
                    >
                        <span className='icon icon-google'></span>
                        <span className=''>Continue with Google</span>
                    </button> */}
                </Box>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    number: state.count.number,
    history: state.count.history,
});

const mapDispatchToProps = (dispatch) => ({
    increaseNumber: () => {
        dispatch(increaseNumber());
    },
    decreaseNumber: () => {
        dispatch(decreaseNumber());
    },
    updateHistory: (item) => {
        dispatch(updateHistory(item));
    },
    getPostsThunkAPI: (page) => {
        dispatch(getPostsThunk(page))
            .then(unwrapResult)
            .then((rs) => {
                console.log('Promise', rs);
            })
            .catch((err) => {
                console.error(err);
            });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);