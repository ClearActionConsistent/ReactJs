import React, { Component } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogout: false,
            isLoggedIn: false
        }
        this.SignOut = this.SignOut.bind(this);
    }

    componentWillUnmount() {
        this.setState({ isLoggedIn: false });
        this.SignOut();
    }

    SignOut() {
        this.setState({ isLogout: true });
    }

    render() {
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
                        {this.state.isLogout && <Navigate to='/login' />}
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;