import React from 'react';

const Header = ({ title, className, onClick }) => {
    return (
        <div className='header'>
            Task Tracker
            <button className={className} onClick={onClick}>{title}</button>
        </div>
    )
};

export default Header;