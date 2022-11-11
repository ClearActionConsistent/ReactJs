import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import './styles.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.LoginRequest = this.LoginRequest.bind(this);
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            isHide: false,
            error: false
        }
    }

    componentDidMount() {
        console.log('Login componentDidMount');
    }

    componentWillUnmount() {
        console.log('Login componentWillUnmount');
        this.setState({ isLoggedIn: true });
        this.setState({ email: '' });
        this.setState({ password: '' });
        this.setState({ error: false });
        this.setState({ isHide: false });
    }

    ChangeEmail(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }

    ChangePassword(event) {
        const value = event.target.value;
        this.setState({ password: value });
    }

    LoginRequest() {
        if (this.state.email === 'tuananh@gmail.com' && this.state.password === '12345678') {
            this.setState({ isShow: false });
            this.setState({ isLoggedIn: true });
            this.setState({ error: false });
        }
        else {
            this.setState({ error: true });
            this.setState({ isShow: true });
            this.setState({ isLoggedIn: false });
            this.setState({ email: '' });
            this.setState({ password: '' });
        }
    }

    handleClickShowPassword() {
        this.setState({ isHide: !this.state.isHide });
    };

    render() {
        return (
            <div className='container'>
                <div className='img-logo'>
                    <img style={{ height: '300px' }} src='https://www.fitnesstogether.gr/wp-content/uploads/2021/06/Kick-Boxing-1-1024x529.jpg' alt='GTT logo' />
                </div>
                <div className='form-login'>
                    <div className='login'>
                        <p>Already have an account?</p>
                        <FormInput
                            email={this.state.email}
                            password={this.state.password}
                            changeEmail={this.ChangeEmail}
                            changePassword={this.ChangePassword}
                            error={this.state.error}
                            isHide={this.state.isHide}
                            onClick={this.handleClickShowPassword}
                        />
                        <button className='btn btn-login' onClick={() => this.LoginRequest()}>Log In</button>
                        {this.state.isLoggedIn && <Navigate to='/home' />}
                        <Link to='/register' className='sign-up'>New to GTT? Sign up.</Link>
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