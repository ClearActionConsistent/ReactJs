import React, { Component } from 'react';

export class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <div className='inform-class'>
                <p >Coach Name</p>
                <p>{item.coach_name || null}</p>
            </div>
        )
    }
}

export default Item;