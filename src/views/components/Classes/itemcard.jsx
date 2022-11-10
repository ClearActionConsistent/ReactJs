import React, { Component } from 'react'
import Item from './item'

export class ItemCard extends Component {
    render() {
        return (
            <div className='inform-item'>
                <div className='class-item'>
                    <div className='logo' />
                    <div className='inform'>
                        <p>ORANGE 60 - VIRTUAL</p>
                        <Item item={{ field: 'Coach Name', value: 'Adrea' }} />
                        <Item item={{ field: 'Date of Class', value: 'CLass Ended' }} />
                        <Item item={{ field: 'Time of Class', value: 'Class Ended' }} />
                        <Item item={{ field: 'Duaration of Class', value: '60 Minutes' }} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard