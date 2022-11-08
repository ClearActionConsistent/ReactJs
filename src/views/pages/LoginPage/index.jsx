import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './styles.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.LoginRequest = this.LoginRequest.bind(this);
        this.ChangeUserName = this.ChangeUserName.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: '',
            isHide: false
        }
    }

    componentDidMount() {
        console.log('Login componentDidMount');
    }

    componentWillUnmount() {
        console.log('Login componentWillUnmount');
    }

    ChangeUserName(event) {
        const value = event.target.value;
        this.setState({ username: value });
    }

    ChangePassword(event) {
        const value = event.target.value;
        this.setState({ password: value });
    }

    LoginRequest() {
        if (this.state.username === 'tuananh@gmail.com' && this.state.password === '12345678x@X') {
            this.setState({ isShow: false });
            this.setState({ isLoggedIn: true });
            alert('Login successfully!');
        }
        else {
            this.setState({ isShow: true });
            this.setState({ isLoggedIn: false });
            this.setState({ username: '' });
            this.setState({ password: '' });
            alert('Email or password is correctly. Please enter your email and password again!')
        }
    }

    handleMouseDownPassword(event) {
        event.preventDefault();
    }

    handleClickShowPassword() {
        this.setState({ isHide: !this.state.isHide });
    }

    render() {
        return (
            <div className='container'>
                <div className='img-logo'>
                    <img src='https://www.actualidadiphone.com/wp-content/uploads/2013/03/strava-logo.png' alt='strava logo' />
                </div>
                <div className='form-login'>
                    <div className='login'>
                        <p>Already have an account?</p>
                        <div>
                            <OutlinedInput
                                className='input-user'
                                placeholder='Email'
                                type='email'
                                value={this.state.username}
                                onChange={this.ChangeUserName}
                            />
                            <OutlinedInput
                                placeholder='Password'
                                className='input-user'
                                type={this.state.isHide ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.ChangePassword}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge='end'
                                        >
                                            {this.state.isHide ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                autoFocus={false}
                            />
                        </div>
                        <button className='btn btn-login' onClick={() => this.LoginRequest()}>Log In</button>
                        {this.state.isLoggedIn && <Navigate to='/home' />}
                        <Link to='/register' className='sign-up'>New to Strava? Sign up.</Link>
                    </div>
                    <div className='login-with'>
                        <button className='btn login-with__facebook'>
                            <div className='icon-facebook'><i className='fab fa-facebook'></i></div>
                            <p>Continue with Facebook</p>
                            <div></div>
                        </button>
                        <button className='btn login-with__google'>
                            <span className='icon-google'></span>
                            <p>Continue with Google</p>
                            <div></div>
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default LoginPage;