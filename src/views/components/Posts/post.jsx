import React, { Component } from 'react'
import ChallengeMetric from '../ChallengeMetric';
import Profile from './profile';

class Post extends Component {

    render() {
        const { value } = this.props
        return (
            <div className='post_container'>
                <div className='post_item'>
                    <Profile value={value} />
                    <ChallengeMetric />
                </div>
            </div>
        )
    }
}

export default Post