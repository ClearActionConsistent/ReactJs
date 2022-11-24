import React, { useState } from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../slices/authSlice';
import { Navigate } from 'react-router-dom';

const LoginGoogle = (props) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const onSuccess = (res) =>{
        const decoded = jwt_decode(res.credential);
        dispatch(authActions.login({ userName: decoded.email }))
    }

    const onError = () => {
        dispatch(authActions.loginFail());
    }

    return (
        <div >
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
                theme='outline'
                size='medium'
                type='standard'
                shape='rectangular'
                width='400px'
            />
            {isLoggedIn && <Navigate to='/home' replace />}
        </div>
    )
}

export default LoginGoogle