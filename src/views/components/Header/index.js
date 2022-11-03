import React from 'react';

const Header = ({ title, className, onClick }) => {
    return (
        <div className='header'>
            Task Tracker From Main Branch v2 
            <button className={className} onClick={onClick}>{title}</button>
        </div>
    )
};

export default Header;
