import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDataPopup, setStatusPopup } from '../../../slices/popupSlice';

export class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.handlePopup = this.handlePopup.bind(this);
        this.state = {
            detail: {
                name: this.props.value.name,
                coach_name: this.props.value.coach_name,
                date: this.props.value.date,
                time: this.props.value.time,
                duration: this.props.value.duration,
                classId: this.props.value.classId,
                listDetail: this.props.value.detail
            },
        };
    }

    handlePopup() {
        const { setDataPopup, setStatusPopup, } = this.props;

        setDataPopup({
            name: this.props.value.name,
            coach_name: this.props.value.coach_name,
            date: this.props.value.date,
            time: this.props.value.time,
            duration: this.props.value.duration,
            classId: this.props.value.classId,
            listDetail: this.props.value.detail
        });

        setStatusPopup({
            isOpenDetailClass: true,
            isOpenAddChallenge: false
        })
    }

    render() {
        const { value } = this.props
        return (
            <div className='inform-item'>
                <div className='class-item'>
                    <img src={value.avatar || null} alt="class" className='logo' />
                </div>
                <div className='inform'>
                    <button onClick={this.handlePopup}>{value.name || null}</button>
                    <div className='inform-class'>
                        <p >Coach Name</p>
                        <p>{value.coach_name || null}</p>
                    </div>
                    <div className='inform-class'>
                        <p >Date of Class</p>
                        <p>{value.date || null}</p>
                    </div>
                    <div className='inform-class'>
                        <p >Time of Class</p>
                        <p>{value.time || null}</p>
                    </div>
                    <div className='inform-class'>
                        <p >Duaration of Class</p>
                        <p>{value.duration || null}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    popup: state.popup,
});

const mapDispatchToProps = (dispatch) => ({
    setStatusPopup: (payload) => {
        dispatch(setStatusPopup(payload));
    },
    setDataPopup: (payload) => {
        dispatch(setDataPopup(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);