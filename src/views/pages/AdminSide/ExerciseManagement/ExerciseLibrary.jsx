import React from 'react'
import { exercisesdata } from '../../../../constants'

const ExerciseLibrary = () => {
  return (
    <div className='grid grid-cols-6 mt-5'>
      {exercisesdata.map((item, index) => (
        <div className='m-2 border bg-gray-100 p-2 w-288 rounded-xl' key={index}>
          <img className='w-272 h-180 rounded-xl' src={item.img} alt='exercise' />
          <p className='w-272 items-center text-center font-bold mt-2'>{item.name}</p>
        </div>
      ))}
    </div>
  )
};

export default ExerciseLibrary;