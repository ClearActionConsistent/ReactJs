
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ItemCard from './itemcard'
import { classes } from "../../../data"

class ListItem extends Component {

    render() {
        return (
            <div className='lst_item'>
                {
                    classes.run.map((item) => {
                        return <ItemCard value={item} key={uuidv4()} />
                    })
                }
            </div>
        )
    }
}

export default ListItem
