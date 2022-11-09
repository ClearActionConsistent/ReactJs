import React, { Component } from 'react'

export class Item extends Component {
    render() {
        console.log(this.props)
        const { item } = this.props
        return (
            <div className='inform-class'>
                <p className=''>{item.field || null}</p>
                <p className=''>{item.value || null}</p>
            </div>
        )
    }
}

export default Item