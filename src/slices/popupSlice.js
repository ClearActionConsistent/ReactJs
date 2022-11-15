import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        detail: {
            name: 'Unknown',
            coach_name: 'Unknown',
            date: 'Unknown',
            time: 'Unknown',
            duration: 'Unknown',
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