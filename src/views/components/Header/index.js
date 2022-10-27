import React from 'react';
import './style.scss';

const Header = ({ title, className }) => {
    return (
        <div className='header'>
            Task Tracker
            <button className={className}>{title}</button>
        </div>
    )
};

export default Header;