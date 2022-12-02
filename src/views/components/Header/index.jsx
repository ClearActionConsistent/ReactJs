import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../../slices/authSlice';

class Header extends Component {
    constructor(props) {
        super(props);
        this.SignOut = this.SignOut.bind(this);
    }

    SignOut() {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <div className='w-full flex justify-between bg-white shadow-lg font-tnr'>
                <div className='flex gap-4 p-6 ml-5 text-lg text-gray-400 font-bold'>
                    <NavLink to='/home'>Upcomming Classes</NavLink>
                    <NavLink to='/workout'>Your Workout Summary</NavLink>
                    <NavLink to='/community'>Our Communnity</NavLink>
                </div>
                <div className='flex gap-5 p-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src={this.props.avatar} />
                    </div>
                    <div >
                        <p className='font-bold'>Welcome, {this.props.name} </p>
                        <p >{this.props.email}</p>
                    </div>
                    <button className='cursor-pointer w-36 h-12 bg-ct4-orange font-bold rounded-3xl text-white' onClick={this.SignOut}>
                        Sign Out
                        {!isLoggedIn && <Navigate to='/login' />}
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        email: state.auth.credentials.email,
        name: state.auth.credentials.name,
        avatar: state.auth.credentials.avatar
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(authActions.logout());
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);