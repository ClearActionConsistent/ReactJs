import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { increaseNumber, decreaseNumber, updateHistory, getPostsThunk } from '../../../slices/countSlice';
import './styles.css';
import { unwrapResult } from '@reduxjs/toolkit';
import FormInput from '../../components/FormInput';

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

    changeEmail(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }

    changePassword(event) {
        const value = event.target.value;
        this.setState({ password: value });
    }

    handleSignup() {
        if (this.state.email === 'tuananh@gmail.com' && this.state.password === '12345678') {
            this.setState({ isShow: false });
            this.setState({ isRegister: true });
            this.setState({ error: false });
        }
        else {
            this.setState({ error: true });
            this.setState({ isShow: true });
            this.setState({ isRegister: false });
            this.setState({ email: '' });
            this.setState({ password: '' });
        }
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
                        <a className='link' href='https://www.izibds.com/'>
                            Ters of Service.
                        </a>
                    </span>
                    <br />
                    <span>
                        View our{' '}
                        <a className='link' href='https://www.izibds.com/'>
                            Privacy Policy.
                        </a>
                    </span>
                </div>
                <div>
                    <button
                        className='btn btn-signup'
                        onClick={() => this.handleSignup()}
                    >
                        Agree and Sign Up
                    </button>
                    {this.state.isRegister && <Navigate to='/home' replace={true} />}
                </div>
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
            })
            .catch((err) => {
                console.error(err);
            });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);