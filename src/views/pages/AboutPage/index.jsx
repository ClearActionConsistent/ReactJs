import React, { Component } from 'react';

class AboutPage extends Component {

    componentDidMount() {
        console.log('About componentDidMount');
    }

    componentWillUnmount() {
        console.log('About componentWillUnmount');
    }

    render() {
        return (
            <div>AboutPage</div>
        )
    }
}

export default AboutPage;