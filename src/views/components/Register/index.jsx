import React, { Component } from 'react';

class RegisterPage extends Component {

    componentDidMount() {
        console.log('Register componentDidMount');
    }

    componentWillUnmount() {
        console.log('Register componentWillUnmount');
    }

    render() {
        return (
            <div>RegisterPage</div>
        )
    }
}

export default RegisterPage;