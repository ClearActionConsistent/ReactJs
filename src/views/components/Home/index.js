import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header className='btn-add' onClick={() => navigate('/add')} title='Add' />
        </div>
    )
};

export default HomePage;