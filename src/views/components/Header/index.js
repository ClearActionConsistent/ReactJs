import React from 'react';
import './style.scss';

const Header = ({ title, className, onClick }) => {
    return (
        <div className='header'>
            Task Tracker
            <button className={className} onClick={onClick}>{title}</button>
        </div>
    )
};

export default Header;