import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TextField } from '@mui/material';
import './styles.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.LoginSuccess = this.LoginSuccess.bind(this);
        this.state = {
            isLoggedIn: false,
            isShow: false
        }
    }

    componentDidMount() {
        console.log('Login componentDidMount');
        console.log('=========================================');
    }

    componentWillUnmount() {
        console.log('Login componentWillUnmount');
        console.log('=========================================');
    }

    LoginSuccess() {
        console.log('login');
        if (!this.state.isShow) {
            this.setState({ isShow: true });
        } else {
            this.setState({ isShow: false });
            this.setState({ isLoggedIn: true });
        }
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
                        {
                            this.state.isShow && <div>
                                <TextField className='input-user' label='Username' type='email' />
                                <TextField className='input-user' label='Password' type='password' />
                            </div>
                        }
                        <button className='btn btn-login' onClick={() => this.LoginSuccess()}>Log In</button>
                        {this.state.isLoggedIn && <Redirect to='/about' />}
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
            </div>
        )
    }
}


export default LoginPage;
