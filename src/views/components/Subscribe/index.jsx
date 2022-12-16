import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className='relative'>
        <div className='bg-no-repeat bg-cover bg-center h-480 p-10 my-12 bg-ct4-subscribe blur-sm bg-img mt-12'>
        </div>
        <div className='subcribe'>
          <p className='mt-5 p-1 text-2xl text-white flex justify-center'>Subscribe to receive challenge for each day.</p>
          <button className='p-3 m-auto h-16 text-2xl bg-gradient-to-r from-ct4-red-1 to-ct4-red mt-5 text-white rounded-xl'>Subcribe</button>
        </div>
      </div>
    )
  }
};

export default Subscribe;