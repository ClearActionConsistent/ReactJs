import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../../slices/authSlice';

import './style.css';

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
            <div className='navbar'>
                <div className='navbar_item'>
                    <NavLink to='/home'>Upcomming Classes</NavLink>
                    <NavLink to='/workout'>Your Workout Summary</NavLink>
                    <NavLink to='/community'>Our Communnity</NavLink>
                </div>
                <div className='user'>
                    <div className='user_inform'>
                        <p id='user_usernname'>Welcome, Uyen</p>
                        <p className='cus_span_right'>otfatchall+olivetwo@***</p>
                    </div>
                    <button className='signout' onClick={this.SignOut}>
                        Sign Out
                        {!isLoggedIn && <Navigate to='/login' />}
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(authActions.logout());
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);