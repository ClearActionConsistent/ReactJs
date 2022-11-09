import React, { Component } from 'react'

export class Categories extends Component {
    render() {
        return (
            <div className='nav_categories'>
                <p>Demo Classes</p>
                <div className='categories'>
                    <div>
                        Logo
                        <p>Run</p>
                    </div>
                    <div>
                        Logo
                        <p>Ride</p>
                    </div>
                    <div>
                        Logo
                        <p>Walk</p>
                    </div>        <div>
                        Logo
                        <p>Hike</p>
                    </div>
                    <div>
                        Logo
                        <p>Distance</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories