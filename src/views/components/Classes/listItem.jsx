
import React, { Component } from 'react'
import ItemCard from './itemcard'


class ListItem extends Component {

    render() {
        return (
            <div className='lst_item '>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        )
    }
}

export default ListItem
