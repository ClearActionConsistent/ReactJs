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
            listDetail: []
        },
    },
    reducers: {
        setPopup: (state, action) => {
            state.isOpen = action.payload.isOpen;
            state.detail = action.payload.data
        }
    }
})

export const {
    setPopup
} = popupSlice.actions

export default popupSlice.reducer