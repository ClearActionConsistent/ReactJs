import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BackWorkout = () => {
  return (
    <div className='go-back'>
      <Link to='/workout'>
        <span className='back-icon'></span>
        <span>Back to Workout</span>
      </Link>
    </div>
  )
}

export default BackWorkout;