import React, { Component } from 'react';
import Header from '../../components/Header';
import "./style.css"
import Classes from '../../components/Classes';
class HomePage extends Component {


    render() {
        return (
            <div>
                <Header />

                <Classes />

                <div className="horizon">
                    <hr />
                </div>
                {/* <div className='subcribe'>
                    <div className='subcribe_inform'>
                        <span>Subcribe to receive challenge for each day</span>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default HomePage;