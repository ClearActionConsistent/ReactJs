import React, { Component } from 'react';
import "./style.css"
class Header extends Component {

    render() {
        return (
            <div>
                <div className='navbar'>
                    <div className='navbar_item'>
                        <span className='cus_span'>Upcomming Classes</span>
                        <span className='cus_span'>Your Workout Summary</span>
                        <span className='cus_span'>Our Communnity</span>
                    </div>
                    <div className='user'>
                        <div className='user_inform'>
                            <p id='user_usernname'>Welcome, Uyen</p>
                            <p className='cus_span'>otfatchall+olivetwo@***</p>
                        </div>

                        <button className='signout'>
                            Sign Out
                        </button>
                    </div>
                </div>
                <div className='demo_class'></div>
            </div>
        )
    }
}

export default Header;