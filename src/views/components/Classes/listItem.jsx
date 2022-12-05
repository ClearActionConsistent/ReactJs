
import React, { Component } from 'react';
import ItemCard from './itemcard';

class ListItem extends Component {
    render() {
        const { type } = this.props;
        return (
            <div className='grid grid-cols-3 gap-y-12 gap-x-16'>
                {
                    type.map((item, index) => {
                        return <ItemCard value={item} key={index} />
                    })
                }
            </div>
        )
    }
}

export default ListItem;
