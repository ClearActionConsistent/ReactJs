import React, { Component } from 'react';
import Categories from './categories';
import ListItem from './listItem';
import './styles.css';

class Classes extends Component {
    render() {
        return (
            <div className='container-classes'>
                <Categories />
                <ListItem />
            </div>
        )
    }
}

export default Classes;