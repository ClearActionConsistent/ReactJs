import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { increaseNumber, decreaseNumber, updateHistory, getPostsThunk } from '../../../slices/countSlice';
import './styles.css';
import { unwrapResult } from '@reduxjs/toolkit';
import FormInput from '../../components/FormInput';
import { authActions } from '../../../slices/authSlice';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.state = {
            email: '',
            password: '',
            isRegister: false,
            isHide: false,
            error: false,
        };
    }

    Email = '';

    changeEmail(event) {
        const value = event.target.value;
        this.setState({ email: value });

        this.Email = value;
    }

    changePassword(event) {
        const value = event.target.value;
        this.setState({ password: value });
    }

    handleSignup(e) {
        e.preventDefault();
        this.props.onSignUp({ email: this.Email });
    }

    handleClickShowPassword() {
        this.setState({ isHide: !this.state.isHide });
    }

    render() {
        return (
            <div className='sign-up-form'>
                <div className='title-signup'>
                    <h1>Sign up with email</h1>
                </div>
                <form onSubmit={this.handleSignup}>
                    <FormInput
                        email={this.state.email}
                        password={this.state.password}
                        changeEmail={this.changeEmail}
                        changePassword={this.changePassword}
                        error={this.state.error}
                        isHide={this.state.isHide}
                        onClick={this.handleClickShowPassword}
                        isRegister={true}
                    />
                    <div className='term-condititon'>
                        <span> By siging up you are agreeing to our{' '}
                            <Link to='/'> Ters of Service.</Link>
                        </span>
                        <br />
                        <span>
                            View our{' '}
                            <Link to='/'> Privacy Policy.</Link>
                        </span>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='btn btn-signup'
                        >
                            Agree and Sign Up
                        </button>
                        {this.props.isLoggedIn && <Navigate to='/home' replace={true} />}
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (payload) => dispatch(authActions.signUp(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);