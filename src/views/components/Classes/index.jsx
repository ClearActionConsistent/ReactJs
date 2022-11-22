import React, { Component } from 'react';
import ShowDetail from './popupDetails';
import { connect } from 'react-redux';
import { fetchRunClassesList } from '../../../slices/classSlice';
import Categories from './categories';
import ListItem from './listItem';
import './styles.css';
import AddChallenge from '../AddChallenge';

class Classes extends Component {
    render() {
        const { classes, fetchRunClassesList, type, active, isOpenPopup, isAddChallenge } = this.props;
        return (
            <div className='container-classes'>
                <Categories classes={classes} fetchRunClassesList={fetchRunClassesList} active={active} />
                <ListItem type={type} />
                {isOpenPopup && <ShowDetail />}
                {isAddChallenge && <AddChallenge />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    classes: state.class.classList,
    type: state.class.type,
    active: state.class.active,
    isOpenPopup: state.popup.isOpen,
    isAddChallenge: state.popup.isAddChallenge,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRunClassesList: (payload) => {
        dispatch(fetchRunClassesList(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Classes);