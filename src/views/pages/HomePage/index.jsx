import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Classes from '../../components/Classes';
import Subscribe from '../../components/Subscribe';
import './style.css';
import ShowDetail from './../../components/Classes/popupDetails';
import AddChallenge from '../../components/AddChallenge';

class HomePage extends Component {
    render() {
        const { isOpenDetailClass, isOpenAddChallenge } = this.props;
        return (
            <>
                <Header />
                <div className='container-home-page'>
                    <Classes />
                    <Subscribe />
                    {isOpenDetailClass && <ShowDetail />}
                    {isOpenAddChallenge && <AddChallenge />}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isOpenDetailClass: state.popup.isOpenDetailClass,
    isOpenAddChallenge: state.popup.isOpenAddChallenge,
})

export default connect(mapStateToProps, null)(HomePage);