import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        detail: {
            name: '',
            coach_name: '',
            date: '',
            time: '',
            duration: '',
            classId: '',
            listDetail: []
        },
        isAddChallenge: false,

    },
    reducers: {
        setPopup: (state, action) => {
            state.isOpen = action.payload.isOpen;
            state.detail = action.payload.data
        },
        showChallenge: (state, action) => {
            state.isAddChallenge = action.payload.isAddChallenge;
            state.isOpen = action.payload.isOpen
        }
    }
})

export const {
    setPopup,
    showChallenge
} = popupSlice.actions

export default popupSlice.reducer