import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ItemWorkout extends Component {
    render() {
        const { value } = this.props
        return (
            <div className='workout-card'>
                <div className='header_workout'>
                    <h1 className='date'>
                        {value.date || null}
                    </h1>
                    <div className='performance-container'>
                        <NavLink to='/challenge' className='performance'>
                            View Performance
                        </NavLink>
                    </div>
                </div>

                <div className='item_container'>
                    <div className='item-detail'>
                        <div>
                            {value.time || null}
                        </div>
                        <div>
                            {value.sit || null}
                        </div>
                        <div className='inform_workout'>
                            <span>
                                {value.title || null}
                            </span>
                            <span className='value-type'>
                                {value.type || null}
                            </span>
                            <div className='fb_icon'>
                                <i className='fa-xl fa-brands fa-facebook' />
                                <img className='you' alt='you' />
                            </div>
                        </div>
                    </div>

                    <div className='item-data'>
                        <div className='item-data-detail'>
                            <span className='icon_heartRate'></span>
                            <span className='value'>
                                {value.metric.heart || null}
                            </span>
                        </div>
                        <div className='item-data-detail'>
                            <span className='icon_otf'></span>
                            <span className='value'>
                                {value.metric.otf || null}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemWorkout;