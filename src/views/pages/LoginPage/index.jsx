import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { OutlinedInput } from '@mui/material';
import './styles.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.LoginRequest = this.LoginRequest.bind(this);
        this.ChangeUserName = this.ChangeUserName.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.state = {
            isLoggedIn: false,
            username: '',
            email: '',
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

    ChangeEmail(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }

    LoginRequest() {
        if (this.state.username === 'tuananh18' && this.state.email === 'tuananh@gmail.com') {
            this.setState({ isShow: false });
            this.setState({ isLoggedIn: true });
            alert('Login successfully!');
        }
        else {
            this.setState({ isShow: true });
            this.setState({ isLoggedIn: false });
            this.setState({ username: '' });
            this.setState({ email: '' });
            alert('Email or uername is correctly. Please enter your email and username again!')
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='img-logo'>
                    <img style={{ height: '300px' }} src='https://www.fitnesstogether.gr/wp-content/uploads/2021/06/Kick-Boxing-1-1024x529.jpg' alt='strava logo' />
                </div>
                <div className='form-login'>
                    <div className='login'>
                        <p>Already have an account?</p>
                        <div>
                            <OutlinedInput
                                className='input-user'
                                placeholder='Username'
                                type='text'
                                value={this.state.username}
                                onChange={this.ChangeUserName}
                            />
                            <OutlinedInput
                                placeholder='Email'
                                className='input-user'
                                type='email'
                                value={this.state.email}
                                onChange={this.ChangeEmail}
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