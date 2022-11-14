import React, { Component } from 'react';
import ChartComponent from '../Charts/MetricChart';
import './styles.css';

class ChallengeMetric extends Component {
    render() {
        return (
            <div className='container-challenge-metric'>
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
        )
    }
}

export default ChallengeMetric;