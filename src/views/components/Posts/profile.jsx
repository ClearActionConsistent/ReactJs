import React, { Component } from 'react'

class Profile extends Component {
    render() {
        const { value } = this.props
        return (
            <>
                <div className='profile_containter'>
                    <img src={value.avatar || null} alt="avatar" />
                    <div className='profile_detail'>
                        <span className='name'>{value.name || null}</span>
                        <div className='profile_location'>
                            <img className='run' alt="run_icon" />
                            <span className='location'>
                                {value.time || null} . {value.location || null}
                            </span>
                        </div>
                    </div>

                </div>
                <div className='date'>
                    {value.session || null}  {value.className || null}
                </div>
            </>
        )
    }
}

export default Profile