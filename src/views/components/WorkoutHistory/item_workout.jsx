import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ItemWorkout extends Component {
    render() {
        const { value } = this.props
        return (
            <div style={{ padding: "15px 15px 0px 15px" }}>
                <div className='header_workout'>
                    <span className='date'>
                        {value.date || null}
                    </span>
                    <NavLink to='/challenge' className='performance'>
                        View Performance
                    </NavLink>
                </div>

                <div className="horizon">
                    <hr />
                </div>

                <div className="item_container">
                    <div>
                        <div className='style_center sub_info'>
                            {value.time || null}
                        </div>
                        <div className='style_center sub_info'>
                            {value.sit || null}
                        </div>
                        <div className='inform_workout '>
                            <span className='inform_1 style_font style_center'>
                                {value.title || null}
                            </span>
                            <span className='inform_2 style_font style_center'>
                                {value.type || null}
                            </span>
                            <div className='fb_icon style_center'>
                                <i className="fa-xl fa-brands fa-facebook" />
                                <img className='you' alt="you" />
                            </div>
                        </div>
                    </div>

                    <div className='style_center gap_style' style={{
                        "--g": "20px",
                        marginTop: "20px"
                    }}>
                        <div className="inform_3 style_center">
                            <div className="icon_heartRate" />
                            <span>
                                {value.metric.heart || null}
                            </span>
                        </div>
                        <div className="inform_3 style_center gap_style" style={{
                            "--g": "17px"
                        }}>
                            <div className="">
                                <div className="icon_otf" />
                            </div>
                            <span>
                                {value.metric.otf || null}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemWorkout