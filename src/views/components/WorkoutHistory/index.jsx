import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemWorkout from './item_workout';
import Header from '../Header';
import './style.css';
import { workout_summary } from '../../../data';

export class WorkoutHistory extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='main_container'>
                    <h1 className='title'>YOUR WORKOUT HISTORY</h1>
                    <div className='lst_workout'>
                        {
                            workout_summary.map((item) => {
                                return <ItemWorkout value={item} key={uuidv4()} />;
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default WorkoutHistory;