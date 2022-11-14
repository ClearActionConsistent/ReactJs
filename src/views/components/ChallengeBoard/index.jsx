import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ChartComponent from '../Charts/MetricChart';
import './styles.css';
import Header from '../Header';

class ChallengeBoard extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container-challenge-board'>
                    <div>
                        <Link to='/workout' className='go-back'>
                            <span className='back-icon'></span>
                            <span>Back to Workout</span>
                        </Link>
                    </div>
                    <div className='container-challenge-chart'>
                        <ChartComponent />
                        <h1>Mintues / Zone</h1>
                    </div>
                    <div className='container-challenge'>
                        <div className='container-challenge-data'>
                            <div>
                                <span className='calories'></span>
                                <h1>
                                    3
                                    <span>calories</span>
                                </h1>
                            </div>
                            <div>
                                <span className='splat-point'></span>
                                <h1>
                                    10
                                    <span>splat points</span>
                                </h1>
                            </div>
                            <div>
                                <span className='avg-heart-rate'></span>
                                <h1>
                                    90
                                    <span>avg. heart rate</span>
                                </h1>
                            </div>
                            <div>
                                <span className='heart-rate'></span>
                                <h1>
                                    116
                                    <span>max heart rate</span>
                                </h1>
                            </div>
                            <div>
                                <span className='miles'></span>
                                <h1>
                                    36
                                    <span>miles</span>
                                </h1>
                            </div>
                            <div>
                                <span className='steps'></span>
                                <h1>
                                    20
                                    <span>steps</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChallengeBoard;