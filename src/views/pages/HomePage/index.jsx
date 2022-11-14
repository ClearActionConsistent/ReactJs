import React, { Component } from 'react';
import Header from '../../components/Header';
import Classes from '../../components/Classes';
import Subscribe from '../../components/Subscribe';
import './style.css';
class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container-home-page'>
                    <Classes />
                    <Subscribe />
                </div>
            </>
        )
    }
}

export default HomePage;