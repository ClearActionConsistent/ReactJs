import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div className='relative'>
                <div className='bg-no-repeat bg-cover bg-center h-96 p-10 my-12 bg-ct4-subscribe blur-sm bg-img'>
                </div>
                <div className='absolute w-800 h-40 bg-black/40 font-bold border top-1/2 left-1/2 border-gray-700 -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl'>
                    <p className='mt-5 p-1 text-2xl text-white flex justify-center'>Subscribe to receive challenge for each day.</p>
                    <button className='p-2 text-2xl bg-gradient-to-r from-ct4-red-1 to-ct4-red mt-5 text-white rounded-xl ml-350'>Subcribe</button>
                </div>
            </div>
        )
    }
}

export default Subscribe;