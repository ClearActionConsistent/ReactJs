import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import './styles.css';

import { useSelector, useDispatch } from 'react-redux';
import {authActions} from '../../../slices/authSlice';

const LoginPage = (props) => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHide, setIsHide] = useState(false);
    const [error, setError] = useState(false);

    //events
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const dispatch = useDispatch();

    const LoginRequest = () => {
        if (email === 'tuananh@gmail.com' && password === '12345678') {
            dispatch(authActions.login({userName: 'tuananh@gmail.com'}));
        }
        else {
            setError(true);
            setIsLoggedIn(false);
            setEmail('');
            setPassword('');
        }
    }

    const handleClickShowPassword = () => {
        setIsHide(!isHide);
    };

    return (
        <div className='container'>
            <div className='img-logo'>
                <img style={{ height: '300px' }} src='https://www.fitnesstogether.gr/wp-content/uploads/2021/06/Kick-Boxing-1-1024x529.jpg' alt='GTT logo' />
            </div>
            <div className='form-login'>
                <div className='login'>
                    <p>Already have an account?</p>
                    <FormInput
                        email={email}
                        password={password}
                        changeEmail={onChangeEmail}
                        changePassword={onChangePassword}
                        error={error}
                        isHide={isHide}
                        onClick={handleClickShowPassword}
                        isRegister={false}
                    />
                    <button className='btn btn-login' onClick={LoginRequest}>Log In</button>
                    {isLoggedIn && <Navigate to='/home' />}
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

export default LoginPage;