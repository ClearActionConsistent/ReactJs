import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ItemWorkout from './item_workout'
import "./style.css"
import { workout_summary } from "../../../data"

export class WorkoutHistory extends Component {

    render() {
        return (
            // <div className='container_workout'>
            <div className='main_container'>
                <span className='title'>YOUR WORKOUT HISTORY</span>
                <div className='lst_workout'>
                    {
                        workout_summary.map((item) => {
                            return <ItemWorkout value={item} key={uuidv4} />;
                        })
                    }
                </div>
            </div>
            // </div>
        )
    }
}

export default WorkoutHistory