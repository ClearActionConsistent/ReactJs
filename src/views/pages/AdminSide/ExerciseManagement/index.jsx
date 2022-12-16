import React from 'react'
import Header from '../../../components/Header'
import Paginations from '../../../components/Pagination'
import SearchField from '../../../components/SearchField'
import ExerciseLibrary from './ExerciseLibrary';

const ExerciseManagement = () => {
  return (
    <div>
      <Header />
      <div className='m-auto max-w-1800'>
        <div>
          <p className='text-gray-700 font-bold text-3xl mt-10'>Exercise Management</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex justify-end mt-10'>
            <SearchField />
          </div>
          <button className='uppercase w-50 bg-gradient-to-r from-orange-700 to-ct4-orange text-base p-4 font-bold text-white rounded-full mt-5'>Create New Exercise</button>
        </div>
        <div>
          <ExerciseLibrary />
          <Paginations />
        </div>
      </div>
    </div>
  )
};

export default ExerciseManagement;
