import React, { Component } from 'react'
import Item from './item'

export class ItemCard extends Component {
    render() {
        const { value } = this.props
        console.log(value)
        return (
            <div className='inform-item'>
                <div className='class-item'>
                    <img src={value.avatar || null} alt="class" className='logo' />
                    <div className='inform'>
                        <p>{value.name || null}</p>
                        <div className='inform-class'>
                            <p >Coach Name</p>
                            <p>{value.coach_name || null}</p>
                        </div>
                        <div className='inform-class'>
                            <p >Date of Class</p>
                            <p>{value.date || null}</p>
                        </div>
                        <div className='inform-class'>
                            <p >Time of Class</p>
                            <p>{value.time || null}</p>
                        </div>
                        <div className='inform-class'>
                            <p >Duaration of Class</p>
                            <p>{value.duration || null}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCard