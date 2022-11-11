import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogout: false,
        }
        this.SignOut = this.SignOut.bind(this);
    }

    SignOut() {
        this.setState({ isLogout: true });
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar_item'>
                    {/* <span className='cus_span'>Upcomming Classes</span>
                    <span className='cus_span'>Your Workout Summary</span>
                    <span className='cus_span'>Our Communnity</span> */}
                    <NavLink to='/upcoming' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Upcomming Classes</NavLink>
                    <NavLink to='/workout' className={({ isActive }) => (isActive ? ' active' : 'inactive')}>Your Workout Summary</NavLink>
                    <NavLink to='/community' className={({ isActive }) => (isActive ? ' active' : 'inactive')}>Our Communnity</NavLink>
                </div>
                <div className='user'>
                    <div className='user_inform'>
                        <p id='user_usernname'>Welcome, Uyen</p>
                        <p className='cus_span_right'>otfatchall+olivetwo@***</p>
                    </div>
                    <button className='signout' onClick={this.SignOut}>
                        Sign Out
                        {this.state.isLogout && <Navigate to='/login' />}
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;