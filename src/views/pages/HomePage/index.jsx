import React, { Component } from 'react';
import Header from '../../components/Header';
import Classes from '../../components/Classes';
import Subscribe from '../../components/Subscribe';
import './style.css';
class HomePage extends Component {


    render() {
        return (
            <div className='container-home-page'>
                <Header />
                <Classes />
                <div className='horizon'>
                    <hr />
                </div>
                <Subscribe />
            </div>
        )
    }
}

export default HomePage;