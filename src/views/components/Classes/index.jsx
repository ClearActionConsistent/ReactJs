import React, { Component } from 'react'
import Categories from './categories'
import "./styles.css"
import ListItem from './listItem';

export class Classes extends Component {
    render() {
        return (
            <div className="all">
                <Categories />
                <ListItem />
            </div>
        )
    }
}

export default Classes