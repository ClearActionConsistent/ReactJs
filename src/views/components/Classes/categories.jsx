import React, { Component } from 'react'

export class Categories extends Component {
    render() {
        return (
            <div className='nav_categories'>
                <p>Demo Classes</p>
                <div className='categories'>
                    <div>
                        <span className='icon-logo'></span>
                        <p>Run</p>
                    </div>
                    <div>
                        <span className='icon-logo'></span>
                        <p>Ride</p>
                    </div>
                    <div>
                        <span className='icon-logo'></span>
                        <p>Walk</p>
                    </div>        <div>
                        <span className='icon-logo'></span>
                        <p>Hike</p>
                    </div>
                    <div>
                        <span className='icon-logo'></span>
                        <p>Distance</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories